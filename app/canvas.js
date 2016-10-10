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
		
		$("#"+div_id).append($("<canvas width='"+width+"' height='"+height+"'></canvas>"));
	
		let $c = $("#"+div_id).children()[0];	
		let ctx = $c.getContext("2d");
		this.context=ctx;
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
		//pixel_studio.palette_color.color_selected.to_string()
		this.context.fillStyle=color.to_string();
		this.context.fillRect(x_finale,y_finale,this.pixel_dimension,this.pixel_dimension);
	}
}