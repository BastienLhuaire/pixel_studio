/**
 * Class Couleurs
 * name : le nom en string
 * color : tableau des couleur [r,g,b]
 */
class Color{
	constructor(name,color){
		this.name=name;
		this.color=color;
	}

	to_string(){
		return "rgb("+this.color.join(",")+")";
	}
}