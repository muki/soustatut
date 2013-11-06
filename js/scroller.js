//function scroller() {
	$(document).scroll(function() {
		$('#rightColumn').css('top', $(document).scrollTop()-1680);
	});
	
	// check if stopped scrolling
	$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        // do something
	        console.log("Haven't scrolled in 250ms!");
	    }, 250));
	});
	
//}