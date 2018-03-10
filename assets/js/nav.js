$(document).ready(function() {
    // grab the initial top offset of the navigation
    var fixedNavTop = $('.nav').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var fixedNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('fixed');
        } else {
            $('.nav').removeClass('fixed');
        }
    };

    fixedNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        fixedNav();
    });
});