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

$('#privacy').click(function(){
	loadToPlaceholder('privacy');
});

$('#terms').click(function(){
	loadToPlaceholder('terms');
});

$('#shopping').click(function(){
	loadToPlaceholder('shopping');
});