function loadPage(id,filename){		
	var page = $( id );
	page.load( filename + '.html');
	
	$( "nav ul li" ).removeClass( "active" );
	
	var menu = $('#' + filename + '_li');
	menu.addClass('active');
}