$(document).ready(function() {
	
	// set .slide height to window height
	$('.slide').height($(window).height());
	// set #rightColumn properly to the top
	$('#rightColumn').css('top', -$(window).height()*($('#rightColumn').children().length-1));	
	// position triangles
	$('.fwd').css('left', $('.slide').width()-73);
	// initiate scroller
	scroller();
	// initiate anibg
	$('.anibg').hover(
		function() {			
			anibg($(this))
		}
	);
	// fwd button
	$('.fwd').on('click', function() {
		$('body').animate({
			scrollTop: $(window).scrollTop() + $(window).height()
		}, 700, 'swing', function() {
			$('body').stop(true, true);
			pageActions(whatPage());
		});
	});
	// fwd button arrow bounce
	$('.fwd').on('mouseenter', function() {
		$('.arrow').effect('bounce', 600)
	});
	
	// screen one //
	
	// create hover for screen 1
	$('.slide.one.left a').hover(function() {
		$('.linkic').addClass('trans');
	}, function() {
		$('.linkic').removeClass('trans');
	});
	
	// refresh button
	$('.seprosim').on('click', function() {
		
		// clear all timeouts
		var id = window.setTimeout(function() {}, 0);
		
		while (id--) {
		    window.clearTimeout(id); // will do nothing if no timeout with id is present
		}
		texting = 0;
		popMeAnArticle();
	});
	
	// end of screen one//
	
	// screen two //
	
	$('.circle.control').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.control').show();
	});
	$('.circle.recycle').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.recycle').show();
	});
	$('.circle.cash').on('click', function() {
		$('.slide.two.left h1').hide();
		$('.info').hide();
		$('.info.cash').show();
	});
	
	// end of screen two //
	
	// screen three //

	// set container height
	$('.squarecontainer').height($('.squarecontainer').width());
	
	// click on transparentnost makes it grow
	$('.transparentnost').on('click', function() {
		$(this).animate({
			'height': '+=7%',
			'width': '+=7%',
			'top': '-=7%',
			'left': '-=7%'
		}, {
			duration: 400,
			queue: false,
			easing: 'swing',
			complete: function() {
				console.log('ping');
			}
		});
	});
	
	// end of screen three //
	
	// page actions
	pageActions(whatPage());
	
});























