
var pixel_studio = {

	init: function(){

		// couleurs de la palette
		
		let colors = [
			new Color('black', [0,0,0]),
			new Color('green', [33,171,0]),
			new Color('purple', [117,25,145]),
			new Color('orange', [218,78,4]),
			new Color('blue', [46,69,204]),
			new Color('red', [158,12,12]),
			new Color('pink', [210,107,136]),
			new Color('brown', [127,90,27]),
			new Color('sand', [255,227,92]),
			new Color('grey', [149,145,158])
		];
		this.palette_color.init( colors );

		//init tools
		let tools = [
			new Tool('pencil', 'images/pencil.png'),
			new Tool('eraser', 'images/eraser.png')
		];
		this.palette_tool.init( tools );

		//init canvas
		this.canvas.init("canvas",1150,520,70);
		this.canvas.draw(0,0,colors[1])

		console.log("Pixel studio is initiated and  ready");
	}
};

