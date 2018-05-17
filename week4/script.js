$(document).ready(function() {
    $('.arrowR').click(function() {        
        var slideshow = $(this).siblings('.slideshow');
        
        slideshow.children('div:first')
        .fadeOut(500)
        .next()
        .fadeIn(500)
        .end()
        .appendTo(slideshow);
	});
		
	$('.arrowL').click(function() {
        var slideshow = $(this).siblings('.slideshow');
                
        slideshow.children('div:last')
        .fadeIn(500)
		.prependTo(slideshow)
		.next()
		.fadeOut(500)
		.end();
	});
});