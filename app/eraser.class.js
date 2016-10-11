class Eraser extends Tool{
	constructor( canvas ){
		super('eraser', 'images/eraser.png');

		this.canvas = canvas;
	}

	mouse_down(mouse_event){
		let	ps 		 = pixel_studio,
			position = ps.canvas.screen_to_canvas(mouse_event),
			c 		 = ps.palette_color.bg_color;

		ps.canvas.draw(position.x,position.y, c);
	}

}