$(document).ready (function()
{
    $('#red').add('#blue').add('#green')
        .on('change', changeColor)
});

function changeColor(){
    var red = $('#red').val();
    var blue = $('#blue').val();
    var green = $('#green').val();

    var $color = $('.colorPrev');

    $color.css('background', 'rgb(' + red + ',' + green + ',' + blue + ')');

}