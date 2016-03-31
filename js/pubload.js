
$(document).ready (function() {
    document.getElementById("upload").onclick = pubLoad();

});
function pubLoad(){
    var settings = {
        channel: 'Channel-zq7jdibrr',
        publish_key: 'pub-c-6ec1bade-3025-42e6-b4f7-a953fee47d4c',
        subscribe_key: 'sub-c-74c85f44-f100-11e5-8112-02ee2ddab7fe'
    };

    var pubnub = PUBNUB(settings);

    var info = {};
        info.red = $('#red').val();
        info.blue = $('#blue').val();
        info.green = $('#green').val();
        info.chair = $('#number').val();

    console.log(info);

    pubnub.publish({
        channel: settings.channel,
        message: info

    });


}

