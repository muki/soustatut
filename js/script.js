$(document).ready(function() {
	
	//set .slide height to window height
	$('.slide').height($(window).height());
	
	//set #rightColumn properly to the top
	$('#rightColumn').css('top', -$(window).height()*($('#rightColumn').children().length-1));	
});