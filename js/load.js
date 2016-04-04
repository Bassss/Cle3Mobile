$(document).ready(function(e) {
    //Initial

    //Menu click handler
    $('#content').on('click', 'a, .FAQ', clickHandler);
    $('.nav a').on('click', clickHandler);
    $('#upload_link').on('click', clickHandler);


    function clickHandler(e) {
        console.log(e);
        e.preventDefault();
        var page = $(this).data('url');
        navigate(page);
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

                // if(page == "camera") {
                //     $(function(){
                //         $("#upload_link").on('click', function(e){
                //             e.preventDefault();
                //             $("#upload:hidden").trigger('click');
                //         });
                //     });
                // }
            }
        });
    }
});