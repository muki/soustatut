function anibg(element) {
	$(element).stop(true, true).animate({
		'background-position-x': '+=1px',
		'background-position-y': '-=1px'
	}, 13, 'linear', function() {
		if (element.is(':hover')) {
			anibg(element);
		}
	});
}