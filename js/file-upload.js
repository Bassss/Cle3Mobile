$(document).ready(function(e) {
    $('#content').on('click', 'a', upload);

    $(function upload() {
        $("#upload_link").on('click', function (e) {
            e.preventDefault();
            $("#upload:hidden").trigger('click');
        });
    })

});