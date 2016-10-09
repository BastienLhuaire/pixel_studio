pixel_studio.palette_tool = {

	tools: [],
	tool_selected:null,

	init: function( tools ){
		this.tools = tools;

		let $tools = $('#tools'),
			$one 	= $tools.children('li').detach();

		for(let j=0; j<tools.length; j++){

			let li 		= $one.clone(),
				tool 	= this.tools[j];

			tool.id 	= j;

			li.css('background-image', "url("+tool.icon_file+")")
			  .attr('title', tool.name);
			$tools.append(li);
		}

		console.log('palette : tools ready');
	}
};