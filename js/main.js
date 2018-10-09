(function($) {

    $(window).on("load", function() {
        $(".preloader").addClass("complete");
        $("h1.name").addClass("animate-reveal");
        $("ul.headlines").addClass("animate-reveal");
        $("p.info").addClass("animate-reveal");
        $("a.animated-arrow").addClass("animate-reveal");
    });

    $('.plus-btn').click(function() {
        $('body').toggleClass('menu-open');
    })

})(jQuery);