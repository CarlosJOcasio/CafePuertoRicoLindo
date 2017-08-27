function loadPage(id,filename){		
	var page = $( id );
	page.load( filename + '.html');
	
	$( "nav ul li" ).removeClass( "active" );
	
	var menu = $('#' + filename + '_li');
	menu.addClass('active');
}

$(document).ready(function(){	
	loadPage('#placeholder','home');
});	

$('.navbar-brand').click(function(){
	loadPage('#placeholder','home');
});

$('#home').click(function(){
	loadPage('#placeholder','home');
});

$('#history').click(function(){
	loadPage('#placeholder','history');
});

$('#gallery').click(function(){
	loadPage('#placeholder','gallery');
});

$('#about').click(function(){
	loadPage('#placeholder','about');
});

$('#contact').click(function(){
	loadPage('#placeholder','contact');
});

$('#browsegallery').click(function(){
	loadPage('#placeholder','gallery');
});