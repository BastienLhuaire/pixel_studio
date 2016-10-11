class Pencil extends Tool{

	constructor( canvas ){
		super('pencil', 'images/pencil.png');

		this.canvas = canvas;
	}

	on_mousedown(mouse_event){
		let	ps 		 = pixel_studio,
			position = this.canvas.screen_to_canvas(mouse_event),
			color = ps.palette_color.get_selected();

		this.canvas.draw(position.x,position.y, color);
		canvas.canDraw=true;
	}

	on_mousemove(mouse_event){
		if (canvas.canDraw==true) {
			let	ps 		 = pixel_studio,
			position = this.canvas.screen_to_canvas(mouse_event),
			color = ps.palette_color.get_selected();
			this.canvas.draw(position.x,position.y, color);
		};
	}

	on_mouseup(mouse_event){
		canvas.canDraw=false;
	}
}