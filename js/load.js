$(document).ready(function(e) {
    //Initial

    var loaded = false;

    //Menu click handler
    $('a, .FAQ').click(function(e) {
        e.preventDefault();
        var page = $(this).attr('data-url');

        if(!loaded) {
            loaded = true;
            navigate(page);
        }
    });

    function loadScript() {
        var content = document.getElementById('content');
        var script= document.createElement('script');
        script.type= 'text/javascript';
        script.src= 'js/load.js';
        script.async = true;
        content.appendChild(script);
    }

    function navigate(page) {
        $.ajax({
            url: page + '.php',
            dataType: 'html',
            success: function (output) {
                $("#content").html(output);
                loadScript();
                if(page == "text") {
                    var tiny = loadTinyMCE();

                    $("#content").append(tiny);
                }
            }
        });
    }

    function loadTinyMCE() {
        var tiny = "<script src='plugins/jquery/jquery-1.12.2.min.js'></script>";
        tiny += "<script type='text/javascript' src='//cdn.tinymce.com/4/tinymce.min.js'></script>";
        tiny += "<script type='text/javascript'>  $(document).ready(function() {  tinymce.init({ selector: '.myTextarea', theme: 'modern',width: '100%', height: 245,plugins: ['emoticons textcolor'],menubar: false,toolbar: 'bold italic | forecolor backcolor emoticons'});}); </script>";

        return tiny;
    }

    // $('.page-nav a').click(function(e) {
    //     e.preventDefault();
    //     var page = $(this).attr('data-url');
    //     $("#content").html("");
    //     $('#content').load(page + '.php');
    //     return false;
    // });
    //
    // console.log('HALLO?');
    //
    // $('.FAQ').click(function(e) {
    //     console.log("clickd");
    //     e.preventDefault();
    //     var page = $(this).data('href');
    //     $("#content").html("");
    //     $('#content').load(page + '.php');
    //     return false;
    // });
});