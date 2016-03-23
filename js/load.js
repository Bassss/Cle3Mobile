$(document).ready(function() {
    //Initial
    //$('#content').load('home.php');

    //Menu click handler
    $('.nav ul li a').click(function() {
        var page = $(this).attr('href');
        $('#content').load(page + '.php');
        return false;
    });

    $('.page-nav a').click(function() {
        var page = $(this).attr('href');
        $('#content').load(page + '.php');
        return false;
    });
});