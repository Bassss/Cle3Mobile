$(function() {
    $("#content").on('click', '.down', function() {
        $('html,body').animate({
                scrollTop: $("#exp").offset().top},
            'slow');
    });

    $("#content").on('click', '.up', function() {
        $('html,body').animate({
                scrollTop: $("body").offset().top},
            'slow');
    });
});
