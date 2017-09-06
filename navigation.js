$(document).ready(function(){	
	loadPage('#placeholder','home');
});	

$('.navbar-brand').click(function(){
	loadToPlaceholder('home');
});

$('#home').click(function(){
	loadToPlaceholder('home');
});

$('#history').click(function(){
	loadToPlaceholder('history');
});

$('#gallery').click(function(){
	loadToPlaceholder('gallery');
});

$('#about').click(function(){
	loadToPlaceholder('about');
});

$('#contact').click(function(){
	loadToPlaceholder('contact');
});

$('#browsegallery').click(function(){
	loadToPlaceholder('gallery');
});

/*
var menuicon = $('#menuicon');

menuicon.click(function(){
	var menubutton = $("#menubutton");
	if( menuicon.is(':visible') && menubutton.attr( "aria-expanded" ) === "true" ) {
		var navbarCollapse = $('#navbarCollapse');
		navbarCollapse.removeClass('show');
		menubutton.attr( "aria-expanded", false );
	}
});*/