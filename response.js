var request = require('request');
const fs = require('fs');


const acceptableResponseCodes = [200, 304];

console.log("Starting script", Date.now());

// request('https://api.binance.com/api/v3/exchangeInfo'
// , function (error, response, body) {
//   //console.error('error:', error); // Print the error if one occurred
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log('body:', body);
//   var json = JSON.parse(body);

//   // console.log(json.symbols[1]);

// //   for (var i = 0; i < json.symbols.length; i++) {
// //     var counter = json.symbols[i];
// //     var tester = json.symbols[i].filters[1].stepSize
// //     console.log(json.symbols[0]);
// // }

//   fs.writeFile ("input.json", JSON.stringify(json), function(err) {
//       if (err) throw err;
//       console.log('Exchange info updated successfully!');
//       }
//   );

// });

fs.readFile('input.json', (err, data) => {
  if (err) throw err;
  let json = JSON.parse(data);
  var mySymbol = "TKOUSDT"
  // console.log("Fetching stats for -> ", json.symbols[0].symbol)
  // for (var i = 0; i < 20; i++) {
  //   if (typeof json.symbols[1].filters[i].stepSize !== "undefined") {
  //     console.log("minPrice -> ", json.symbols[0].filters[0].minPrice);
  //     console.log("tickSize -> ", json.symbols[0].filters[0].tickSize);
  //     console.log("minQty -> ",json.symbols[0].filters[i].minQty);
  //     console.log("stepSize -> ", json.symbols[0].filters[i].stepSize);
  //     break;
  //   }

  // }


  for (var i = 0; i < json.symbols.length; i++) {
    if (json.symbols[i].symbol === mySymbol) {
      for (var looper = 0; looper < 10; looper++) {
        if (typeof json.symbols[i].filters[looper].stepSize !== "undefined") {
          console.log("minPrice -> ", json.symbols[i].filters[0].minPrice);
          console.log("tickSize -> ", json.symbols[i].filters[0].tickSize);
          console.log("minQty -> ",json.symbols[i].filters[looper].minQty);
          console.log("stepSize -> ", json.symbols[i].filters[looper].stepSize);
          console.log("Grabbed data for :", json.symbols[i].symbol);
          break;
        }
        
      }
    }
  }

});

