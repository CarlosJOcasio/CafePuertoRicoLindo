function loadToPlaceholder(filename) {
	var id = $('#placeholder');
	id.empty();
	loadPage('#placeholder', filename);
}

function loadPage(id,filename) {		
	jQuery.ajaxSetup({ async: false });
	$.get(filename + '.html', '', function (data) { 

		$(id).append(data); 
	});

	$.get('footer.html', '', function (data) { 
		$(id).append(data); 
	});

	jQuery.ajaxSetup({ async: true });
	
	$( "nav ul li" ).removeClass( "active" );
	
	var menu = $('#' + filename + '_li');
	menu.addClass('active');

	if($('#menuicon').is(':visible')) {
		var navbarCollapse = $('#navbarCollapse');
		navbarCollapse.removeClass('show');
	}	
}