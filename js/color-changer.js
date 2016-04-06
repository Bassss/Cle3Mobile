$(document).ready (function()
{
    $('#content').on('change', '#red', changeColor);
    $('#content').on('change', '#blue', changeColor);
    $('#content').on('change', '#green', changeColor);

});

function changeColor(){
    var red = $('#red').val();
    var blue = $('#blue').val();
    var green = $('#green').val();

    var $color = $('.colorPrev');

    $color.css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');

}