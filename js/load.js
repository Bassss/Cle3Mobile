$(document).ready(function(e) {
    //Initial
    //$('#content').load('home.php');

    //Menu click handler
    $('.nav ul li a').click(function() {
        e.preventDefault();
        var page = $(this).attr('href');
        $("#content").html("");
        $('#content').load(page + '.php');
        return false;
    });

    $('.page-nav a').click(function(e) {
        e.preventDefault();
        var page = $(this).attr('href');
        $("#content").html("");
        $('#content').load(page + '.php');
        return false;
    });

    console.log('HALLO?');

    $('.FAQ').click(function(e) {
        console.log("clickd");
        e.preventDefault();
        var page = $(this).data('href');
        $("#content").html("");
        $('#content').load(page + '.php');
        return false;
    });
});