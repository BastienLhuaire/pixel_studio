pixel_studio.palette={
	colors: [],
	color_selected:null,

	select_color: function(instance_color){
		this.color_selected = instance_color;
	},

	init_colors: function(array_objet){
		this.colors=array_objet;
		let $color_clone=$(".colors tr").detach();

		for (var i = 0; i < array_objet.length; i++) {
			$c = $color_clone.clone();
			color=array_objet[i];
			color.id=i;
			$c.children().children().css("background-color",color.to_string());
			$c.children().children().attr('title',color.name);
			$(".colors").append($c);
		};
			$('.colors').on("click","td",function(){
				$(".colors td").removeClass("color_choose");
				let index = $('.colors td').index(this);
				pixel_studio.palette.select_color(pixel_studio.palette.colors[index]);
				$(this).addClass("color_choose");
			});
		this.select_color(this.colors[0]);
		$('.colors td').eq(0).addClass("color_choose");
	}
};