class Pencil extends Tool{

	constructor( canvas ){
		super('pencil', 'images/pencil.png');

		this.canvas = canvas;
	}

	mouse_down(mouse_event){
		let	ps 		 = pixel_studio,
			position = ps.canvas.screen_to_canvas(mouse_event),
			color = ps.palette_color.get_selected();

		ps.canvas.draw(position.x,position.y, color);
		canvas.canDraw=true;
	}

	mouse_move(mouse_event){
		if (canvas.canDraw==true) {
			let	ps 		 = pixel_studio,
			position = ps.canvas.screen_to_canvas(mouse_event),
			color = ps.palette_color.get_selected();
			ps.canvas.draw(position.x,position.y, color);
		};
	}

	mouse_up(mouse_event){
		canvas.canDraw=false;
	}
}