var WebSocketServer = require('websocket').server;
var http = require('http');

// predefining the list of stocks in the system
const STOCKS = [
  ['AAPL'],
  ['GOOG'],
  ['MSFT'],
  ['LNKD'],
  ['FB'],
  ['NKA'],
  ['RLNC'],
  ['HCC'],
  ['DMRC'],
  ['NMMRC']
];

var server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(8080, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
  let connection = request.accept(null, request.origin);

  function updateTicker() {
    STOCKS.map(stock => {
      stock[1] = (Math.random() * 40).toFixed(2);
    });
    connection.sendUTF(
      JSON.stringify({ stocks: STOCKS } ));
  }

  updateTicker();

  setInterval(function() {
    updateTicker();
  }, 2500);
});