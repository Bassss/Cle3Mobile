var five = require('johnny-five'),
    board, button;
//pubnub stuff
var pubnub = require('pubnub').init({
  subscribe_key: 'sub-c-74c85f44-f100-11e5-8112-02ee2ddab7fe',
  publish_key:   'pub-c-6ec1bade-3025-42e6-b4f7-a953fee47d4c'
});
var channel = 'Channel-zq7jdibrr';

// hardware stuff
var led;
var led1;
var led2;
var r = 1;
var b = 1;
var g = 1;
var chair = 0;
var button;
// publish functie
function publishUpdate(data) {
  pubnub.publish({
    channel: channel,
    message: data

  });
}
board = new five.Board();

board.on("ready", function() {
// Initialize button
  button = new five.Button(2);

  // Initialize the RGB LED
  led1 = new five.Led.RGB({
    pins: {
      red: 5,
      green: 6,
      blue: 3
    }
  });

  // Turn it on and set the initial color
  led1.on();
  led1.color({red: r, blue: b, green: g});


// Initialize the RGB LED2
  led2 = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  });

// Turn it on and set the initial color
  led2.on();
  led2.color({red: r, blue: b, green: g});


  board.repl.inject({
    button: button
  });

  button.on("down", function () {
    console.log("down");
    button = "down";
    publishUpdate({button: 'down'});
  });

  button.on("hold", function () {
    console.log("hold");
    button = "hold";
    publishUpdate({button: 'hold'});
  });

  button.on("up", function () {
    console.log("up");
    button = "up";
    publishUpdate({button: 'up'});
  });



  pubnub.subscribe({
    channel: channel,
    callback: function (m) {
      chair = m.chair;
      if (chair == 1) {
        led = led1;
      } else if (chair == 2) {
        led = led2;
      } else {
        console.log('no chair');
        chair = 0;
      }
      if (chair != 0) {
        if (led) {
          r = m.red;
          g = m.green;
          b = m.blue;


          led.color({red: r, blue: b, green: g});

          console.log(chair, 'color change to...');
          console.log(led.color());
        }
      }
    },
    error: function (err) {
      console.log(err);
    }
  });
});




