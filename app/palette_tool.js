pixel_studio.palette_tool = {

	tools: [],
	tool_selected:null,

	select_tool:  function( tool ){

		this.tool_selected = tool;
		$('#tools li').removeClass('selected_tool')
						.eq(tool.id)
						.addClass('selected_tool');
	},

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
		// outil par defaut
		
		this.select_tool(this.tools[0]);

		// gestion des click
		
		var self = this;

		$('#tools').on('click', 'li', function(){

			let index = $( "#tools li" ).index( this );
			self.select_tool(self.tools[index]);		
		});


		console.log('palette : tools ready');
	}
};