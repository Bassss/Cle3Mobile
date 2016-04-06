$(document).ready(function(e) {
    //Initial

    var currentPage = "home";
    var previousPage = "";

    //Menu click handler
    $('#content').on('click', 'a, .FAQ', clickHandler);
    $('.nav a').on('click', clickHandler);
   
    function clickHandler(e) {
        e.preventDefault();
        var page = $(this).data('url');

        if(page == "back") {
            navigate(previousPage);

        } else {
            navigate(page);
        }
        previousPage = currentPage;
        currentPage = page;
        console.log(" ");
        console.log('previous ' + previousPage);
        console.log('page ' + page);
        console.log('current ' + currentPage);
    }

    function navigate(page) {
        $.ajax({
            url: page + '.php',
            dataType: 'html',
            success: function (output) {
                $("#content").html(output);

                if(page == "text") {
                    tinymce.init({ selector: '.myTextarea', theme: 'modern',width: '100%', height: 245,plugins: ['emoticons textcolor'],menubar: false,toolbar: 'bold italic | forecolor backcolor emoticons'});
                }

                
            }
        });
    }
});