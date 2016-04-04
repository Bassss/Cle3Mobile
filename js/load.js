$(document).ready(function(e) {
    //Initial
    //$('#content').load('home.php');

    //Menu click handler
    $('.nav ul li a').click(function(e) {
        var page = $(this).attr('href');
        $("#content").html("");
        $('#content').load(page + '.php');
        return false;
    });

    $('.page-nav a').click(function() {
        var page = $(this).attr('href');
        $("#content").html("");
        $('#content').load(page + '.php');
        return false;
    });

    $('.FAQ').click(function(e) {
        console.log("clickd");
        e.preventDefault();
        var page = $(this).data('href');
        $("#content").html("");
        $('#content').load(page + '.php');
        return false;
    });
});