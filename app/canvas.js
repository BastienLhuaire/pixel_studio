/**
 * Le canvas, la zone de dessin
 */
pixel_studio.canvas = {

	screen:{
		width: 0,
		height: 0
	},

	pixel_dimension: 0,

	nb_pixel_width: 0,

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
		this.div_id = div_id;
		this.screen.width = this.pixel_dimension*nb_pixel_width;
		this.screen.height = this.pixel_dimension*Math.floor(height/nb_pixel_width);
		this.nb_pixel_width = nb_pixel_width;

		let context_canvas="<canvas id='canvas_pixel_studio' width='"+width+"' height='"+height+"'></canvas>";
		$("#"+div_id).append(context_canvas);
	
		let c = document.getElementById('canvas_pixel_studio');
		this.context=c;
		let ctx = c.getContext("2d")
	}
}