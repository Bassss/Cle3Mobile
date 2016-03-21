$(document).ready(function() {
    //Initial
    $('#content').load('home.html');

    //Menu click handler
    $('.nav ul li a').click(function() {
        var page = $(this).attr('href');
        $('#content').load(page + '.html');
        return false;
    });
});