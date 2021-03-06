;(function($){
    "use strict";

	var height = window.innerHeight || document.body.clientHeight;
    var width = window.innerWidth || document.body.clientWidth;

	var optionsBackground, bsBackground;

	// var width = $('.wrapper').width();
	// var height = $('.wrapper').height();

	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	  }

	var randomImage = randomInteger(1, 3);
	var image;

	switch (randomImage) {
	  case 1:
	    image = 'img/texture-1.png';
	    break;
	  case 2:
	    image = 'img/group.png';
	    break;
	  case 3:
	    image = 'img/texture.png';
	    break;
	}

	// Random curves for background

	optionsBackground = {
	    animation: 'points',
	    points: 10,
	    inkAmount: 5,
	    // dripping: true,
	    size: 300,
	    frames: 10,
	    frameAnimation: true,
	    splashing: false,
	    image: image,
	    centered: true,
	    queue: true,
	    width: width,
	    height: height
	};
	bsBackground = new Brushstroke(optionsBackground);

	// Function to start the animation

	function runAnimation() {
	    // Draw a straight line
	    bsBackground.draw({
	        points: [0, height / 2 - 40, width, height / 3]
	    });

	    // Draw a straight line
	    bsBackground.draw({
	        points: [50, height / 3 - 40, width, height / 3]
	    });


	    // Draw another straight line
	    bsBackground.draw({
	        points: [width, height / 2, 0, height / 1.5 - 40]
	    });

	    // Draw a curve generated using 20 random points
	    bsBackground.draw({
	        inkAmount: 3,
	        frames: 100,
	        size: 200,
	        splashing: true,
	        points: 20
	    });
	}


	if($('#content').width() >= 745) {
		// Start	
	}
	runAnimation();

})(jQuery);