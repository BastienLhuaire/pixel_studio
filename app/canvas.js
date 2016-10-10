/**
 * Le canvas, la zone de dessin
 */
pixel_studio.canvas = {

	screen:{
		width: 0,
		height: 0
	},

	pixel_dimension: 0,

	nb_pixel: {
		width:0,
		height:0
	},

	context: null,

	/**
	 * Préparation de la zone de dessin
	 *
	 * @param      {string}  div_id          nom de la div dans laquelle sera placer le canvas
	 * @param      {number}  width           Largeur exact du canvas en pixel ecran
	 * @param      {number}  height          Hauteur maximum du canvas en pixel ecran
	 * @param      {number}  nb_pixel_width  nombre de pixel en largeur du canvas
	 */
	init : function(div_id,width,height,nb_pixel_width){
		this.pixel_dimension = Math.floor(width/nb_pixel_width);
		this.nb_pixel.height = Math.floor(height/this.pixel_dimension)
		this.div_id = div_id;
		this.screen.width = this.pixel_dimension*nb_pixel_width;
		this.screen.height = this.pixel_dimension*this.nb_pixel.height;
		this.nb_pixel.width = nb_pixel_width;
		
		$("#"+div_id).append($("<canvas width='"+this.screen.width+"' height='"+this.screen.height+"'></canvas>"));
	
		let $c = $("#"+div_id).children()[0];	
		let ctx = $c.getContext("2d");
		this.context=ctx;

		//gestion des click
		$("#canvas canvas").on('click',function(e){
			pixel_studio.canvas.on_click(e);
		});
	},

	/**
	 * Dessine un pixel sur la zone de dessin
	 * @param  {number} x     coordonée horizontal pixel
	 * @param  {number} y     coordonée vertical pixel
	 * @param  {Color} color couleur du pixel : instance de Color
	 */
	draw: function(x,y,color){
		let x_finale=(x-1)*this.pixel_dimension;
		let y_finale=(y-1)*this.pixel_dimension;
		this.context.fillStyle=color.to_string();
		this.context.fillRect(x_finale,y_finale,this.pixel_dimension,this.pixel_dimension);
	},

	screen_to_canvas: function(mouse_event){
		let offset = $("#canvas canvas").offset();
		return{
			x: Math.floor((mouse_event.clientX - offset.left) /this.pixel_dimension)+1,
			y: Math.floor((mouse_event.clientY - offset.top) /this.pixel_dimension)+1
		}
	},

	on_click: function(mouse_event){

		let ps = pixel_studio,
			position = ps.canvas.screen_to_canvas(mouse_event),
			tool = ps.palette_tool.get_selected(),
			color = ps.palette_color.get_selected();

		let c = (tool.name == "pencil") ? color : ps.palette_color.bg_color;

		ps.canvas.draw(position.x,position.y, c);
	}
}