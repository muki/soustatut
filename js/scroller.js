//function scroller() {
	// update right column when scrolling
	$(document).scroll(function() {
		$('#rightColumn').css(
			'top',
			$(document).scrollTop() - $(window).height() * ($('#rightColumn').children().length-1)
		);
	});
	
	// check if stopped scrolling
	$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {	        
	        // calculate diff absolute value
	        diff = Math.abs(parseInt($('#rightColumn').css('top').split('px')[0]) % $(window).height());
	        console.log('diff = ' + diff);
	        
	        // if diff is smaller than half of screen
	        if (diff != 0 && diff < $(window).height()/2) {
	        	console.log($(window).scrollTop() + diff);
	        	$('body').animate({
	        		scrollTop: $(window).scrollTop() + diff
	        	}, 500, 'swing', function() {
	        		$('body').stop(true, true);
	        	});
	        }
	        // if diff is larger than half of screen
	        else if (diff > $(window).height()/2) {
	        	console.log($(window).scrollTop() - diff);
	        	$('body').animate({
	        		scrollTop: $(window).scrollTop() - ($(window).height()-diff)
	        	}, 500, 'swing', function() {
	        		$('body').stop(true, true);
	        	});
	        }
	        
	        console.log("Haven't scrolled in 500ms!");
	    }, 250));
	});
	
//}