$(document).ready(function(){

	/********************************************
	 * Change nav bar on scroll > 768px
	 ********************************************/
	$(window).on('scroll', function() {
		if($(window).width() > 768) {
			if($(window).scrollTop() > 100) {
				$('.navbar').addClass('scrolldown');
			} else {
				$('.navbar').removeClass('scrolldown');
			}
		}
	});

});