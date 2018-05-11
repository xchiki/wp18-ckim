var main = function() {

	var paused = false

	$('.arrowR').click(function() {
		paused = true;
		$('#slideshow > div:first')
		.fadeOut(500)
		.next()
		.fadeIn(500)
		.end()
		.appendTo('#slideshow');
	});
		
	$('.arrowL').click(function() {
		paused = true;
		$('#slideshow > div:last')
		.fadeIn(500)
		.prependTo('#slideshow')
		.next()
		.fadeOut(500)
		.end();
	});
};

$(document).ready(main);