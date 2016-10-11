pixel_studio.data = {

	pixels: {},

	init: function(){


		console.log('data : ready');
	},
	/**
	 * Etabli la couleur d'un pixel précis
	 * @param {number} x [position horizontal du pixel]
	 * @param {number} y [position vertical du pixel]
	 * @param {Color} c [Instance de couleur]
	 */
	set_pixel: function(x,y,c){
		let position_pixel=x+"_"+y;
		if (c==pixel_studio.canvas.bg_color) {
			delete this.pixels[position_pixel];
		}else{
			this.pixels[position_pixel]=c;
		}	
	},

	/**
	 * renvoie l'instance de la couleur du pixel
	 * @param  {[type]} x [position horizontal du pixel]
	 * @param  {[type]} y [position vertical du pixel]
	 * @return {Color}   [Instance de couleur]
	 */
	get_pixel: function(x,y){
		let position_pixel=x+"_"+y;
		if (this.pixels[position_pixel]!=undefined) {
			return this.pixels[position_pixel];
		}else{
			return pixel_studio.canvas.bg_color;
		}
	},

	/**
	 * Determine si le pixel est peint ou vide
	 * @param  {number}  x [position horizontal du pixel]
	 * @param  {number}  y [position vertical du pixel]
	 * @return {Boolean}   [Le pixel est-il vide ?]
	 */
	is_empty: function(x,y){
		return this.get_pixel(x,y)===pixel_studio.canvas.bg_color;
	},

	/**
	 * Renvoie la totalité des pixels en chaîne de caractère
	 * @return {string} Les pixels serializés en string
	 */
	to_string: function(){
		let resultat='';
		for (let position in this.pixels) {
			resultat += position+'_';
			resultat += this.pixels[position].to_string();
			resultat += "|";
		};
		return resultat;
	}
}