


$(document).ready(function(){
    //Function

     //Menu Js
     $('.menu_toggle_btn').click(function(){
        $('.header_wrapper').toggleClass('menu_open');
        $('html').toggleClass('cm-overflow');
    });
    $('.close_menu_btn, .menu_block ul li a').click(function(){
        $('.header_wrapper').removeClass('menu_open');
        $('html').removeClass('cm-overflow');
    });

    $('.nav_link').click(function(){
        $('.header_wrapper').removeClass('menu_open');
        $('html').removeClass('cm-overflow');
    });

     // for smooth scrooll for section-view
    $('.nav_link').click(function (e) {

        e.preventDefault();

        var target = $($(this).attr('href'));

        if (target.length) {

            var scrollTo = target.offset().top - 0;

            $('body, html').animate({
                scrollTop: scrollTo + 'px'
            }, 2000);

        }

    });

});




