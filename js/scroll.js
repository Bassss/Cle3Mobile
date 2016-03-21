$(function() {
    $(".down").click(function() {
        $('html,body').animate({
                scrollTop: $("#exp").offset().top},
            'slow');
    });

    $(".up").click(function() {
            $('html,body').animate({
                scrollTop: $("body").offset().top},
            'slow');
    });
});
