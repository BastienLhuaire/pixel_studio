pixel_studio.palette={
	init_colors: function(array_objet){
		for (var i = 0; i < array_objet.length; i++) {
			color=array_objet[i];
			$(".colors").append("<tr><td><div class='"+color.name+"'></td></tr>")
		};
	}
};