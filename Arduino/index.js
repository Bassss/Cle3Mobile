var five = require('johnny-five');

var led;
var r = 1;
var b = 1;
var g = 1;

var led2;
var r2 = 1;
var b2 = 1;
var g2 = 1;

five.Board().on('ready', function() {
  console.log('ready');

  // Initialize the RGB LED
  led = new five.Led.RGB({
    pins: {
      red: 5,
      green: 6,
      blue: 3
    }
  });

  // Turn it on and set the initial color
  led.on();
  led.color({red: r, blue: b, green: g});


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
led2.color({red: r2, blue: b2, green: g2});
});
var pubnub = require('pubnub').init({
  subscribe_key: 'sub-c-74c85f44-f100-11e5-8112-02ee2ddab7fe',
  publish_key:   'pub-c-6ec1bade-3025-42e6-b4f7-a953fee47d4c'
});
var channel = 'Channel-zq7jdibrr';


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
    if(led2) {
      r2 = (m.color === 'red2') ? m.brightness : r2;
      g2 = (m.color === 'green2') ? m.brightness : g2;
      b2 = (m.color === 'blue2') ? m.brightness : b2;

      led2.color({red: r2, blue: b2, green: g2});

      console.log( 'color2 change to...' );
      console.log( led2.color() );
    }
  },
  error: function(err) {console.log(err);}
});

