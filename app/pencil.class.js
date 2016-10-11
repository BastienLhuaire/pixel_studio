class Pencil extends Tool{

	constructor( canvas ){
		super('pencil', 'images/pencil.png');

		this.canvas = canvas;
	}

	on_mousedown(mouse_event){
		this.draw(mouse_event);
		canvas.canDraw=true;
	}

	on_mousemove(mouse_event){
		if (canvas.canDraw==true) {
			this.draw(mouse_event);
		};
	}

	on_mouseup(mouse_event){
		canvas.canDraw=false;
	}

	draw( mouse_event){
		let position = this.canvas.screen_to_canvas(mouse_event),
			color 	 = pixel_studio.palette_color.get_selected();
		this.canvas.draw(position.x,position.y, color);
	}
}