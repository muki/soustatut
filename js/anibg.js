function anibg(element) {
	$(element).stop(true, true).animate({
		'background-position-x': '+=1px',
		'background-position-y': '-=1px'
	}, {
		duration: 13,
		queue: false,
		easing: 'linear',
		complete: function() {
			if (element.is(':hover')) {
				anibg(element);
			}
		}
	});
}