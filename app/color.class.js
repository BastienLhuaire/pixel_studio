
class Color{

	/**
	 * Représente une couleur dans la palette
	 * @param  {string} name  Nom de la couleur
	 * @param  {array} color  Tableau des commposantes R, G, B
	 */
	constructor(name, color){
		this.name  		= name;
		this.color_rgb 	= color;
	}

	to_string(){
		return "rgb("+this.color_rgb.join(',')+")";
	}
}