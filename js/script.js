$(document).ready(function(){

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });


    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});


$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {
            header.addClass('navbar-in-top');
        } else {
            header.removeClass("navbar-in-top");
        }
    });
});
