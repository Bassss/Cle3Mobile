var five = require('johnny-five');

var led;
var r = 0;
var b = 0;
var g = 0;

var led2;
var r2 = 0;
var b2 = 0;
var g2 = 0;

five.Board().on('ready', function() {
  console.log('ready');

  // Initialize the RGB LED
  led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  // Turn it on and set the initial color
  led.on();
  led.color({red: r, blue: b, green: g});
});

// Initialize the RGB LED2
led = new five.Led.RGB({
  pins: {
    red: 11,
    green: 10,
    blue: 9
  }
});

// Turn it on and set the initial color
led.on();
led.color({red: r, blue: b, green: g});
});
var pubnub = require('pubnub').init({
  subscribe_key: 'sub-c-74c85f44-f100-11e5-8112-02ee2ddab7fe',
  publish_key:   'pub-c-6ec1bade-3025-42e6-b4f7-a953fee47d4c'
});
var channel = 'Channel-u7cd341a3';

pubnub.subscribe({
  channel: channel,
  callback: function(m) {
    if(led) {
      r = (m.color === 'red') ? m.brightness : r;
      g = (m.color === 'green') ? m.brightness : g;
      b = (m.color === 'blue') ? m.brightness : b;

      led.color({red: r, blue: b, green: g});

      console.log( 'color change to...' );
      console.log( led.color() );
    }
  },
  error: function(err) {console.log(err);}
});

