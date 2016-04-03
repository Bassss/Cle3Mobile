var five = require("johnny-five"),
    board, button;

var pubnub = require('pubnub').init({
    subscribe_key: 'sub-c-74c85f44-f100-11e5-8112-02ee2ddab7fe',
    publish_key:   'pub-c-6ec1bade-3025-42e6-b4f7-a953fee47d4c'
});
var channel = 'Channel-zq7jdibrr';

var button = "up";

function publishUpdate(data) {
    pubnub.publish({
        channel: channel,
        message: data

    });
}

board = new five.Board();

board.on("ready", function() {

    button = new five.Button(2);

    board.repl.inject({
        button: button
    });

    button.on("down", function() {
        console.log("down");
        button = "down";
        publishUpdate({button: 'down'});
    });

    button.on("hold", function() {
        console.log("hold");
        button = "hold";
        publishUpdate({button: 'hold'});
    });

    button.on("up", function() {
        console.log("up");
        button = "up";
        publishUpdate({button: 'up'});
    });
});
