const Binance = require('node-binance-api');
var request = require('request');

var config = require('./config.json')

const binance = new Binance().options({
  APIKEY: config['api-key'],
  APISECRET: config['secret-key']
});

// let quantity = 20;
// binance.marketBuy("DOGEUSDT", quantity);

binance.websockets.depth(['DOGEUSDT'], (depth) => {
  let {e:eventType, E:eventTime, s:symbol, u:updateId, b:bidDepth, a:askDepth} = depth;
  console.info(symbol+" market depth update");
  console.info(bidDepth, askDepth);
});


