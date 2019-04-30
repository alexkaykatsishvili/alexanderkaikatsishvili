;(function($){
    "use strict";


	$('#request').on('click', function(){
		$('.back').addClass('d-block');
		$('.form').addClass('d-block');
	});

	$('.back').on('click', function(){
		$('.back').removeClass('d-block');
		$('.form').removeClass('d-block');
	});


})(jQuery);