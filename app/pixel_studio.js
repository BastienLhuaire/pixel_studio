
var pixel_studio = {

	init: function(){

		// couleurs de la palette
		
		let colors = [
			new Color('black', [0,0,0]),
			new Color('green', [33,171,0]),
			new Color('purple', [117,25,145]),
			new Color('orange', [218,78,4]),
			new Color('blue', [46,69,204]),
			new Color('red', [158,12,12])
		];
		let tools = [
			new Tool('pencil', 'images/pencil.png'),
			new Tool('eraser', 'images/eraser.png')
		];
		this.palette_color.init( colors );
		this.palette_tool.init( tools );

		console.log("Pixel studio is initiated and  ready");
	}
};

