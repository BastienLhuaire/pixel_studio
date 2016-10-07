var pixel_studio ={
	init: function() {
		let array_colors=
		[
			new Color("black",[0,0,0]),
			new Color("blue",[46,69,204]),
			new Color("red",[158,12,12]),
			new Color("green",[33,171,0]),
			new Color("yellow",[255,237,15]),
			new Color("purple",[117,25,145]),
			new Color("orange",[218,78,4])
		]
		this.palette.init_colors(array_colors);
		console.log("Pixel Studio");
	}
};

