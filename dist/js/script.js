(function ($) {

    var dataScroll = $('[data-scroll="off"]');
    $(window).on('load', function () {

        if ($(window).width() > 991) {
            console.log($(window).width());
            var top = $(window).scrollTop() + ($(window).height() * 0.8);
            for (var i = 0; i < dataScroll.length; i++) {
                if ($(dataScroll[i]).offset().top < top && $(dataScroll[i]).attr('data-scroll') == 'off') {
                    $(dataScroll[i]).attr('data-scroll', "on");
                }
            }
            $(window).on('scroll', function () {
                var top = $(window).scrollTop() + ($(window).height() * 0.8);
                for (var i = 0; i < dataScroll.length; i++) {
                    if ($(dataScroll[i]).offset().top < top && $(dataScroll[i]).attr('data-scroll') == 'off') {
                        $(dataScroll[i]).attr('data-scroll', "on");
                        dataScroll = $('[data-scroll="off"]');
                    }
                }
            });
        }
    });


    var navMenuLinks = $('.nav-menu a');
    navMenuLinks.click(function () {
        navMenuLinks.removeClass('active');
        $(this).addClass('active');
    });

    var burgerBtn = $('.mobile-menu-burger');
    var navMenu = $('.nav-menu');
    burgerBtn.click(function () {
        $(this).toggleClass('open');
        navMenu.toggleClass('open');
    })
})(jQuery);
