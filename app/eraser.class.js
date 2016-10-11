class Eraser extends Tool{
	constructor( canvas ){
		super('eraser', 'images/eraser.png');

		this.canvas = canvas;
	}

	on_mousedown(mouse_event){
		let	position = this.canvas.screen_to_canvas(mouse_event),
			c 		 = pixel_studio.canvas.bg_color;

		this.canvas.draw(position.x,position.y, c);
	}

}