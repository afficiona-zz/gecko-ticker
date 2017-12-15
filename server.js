'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = 4000;
const INDEX = path.join(__dirname, 'index.html');

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

const server = express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  STOCKS.map(stock => {
    stock[1] = (Math.random() * 40).toFixed(2);
  });
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(STOCKS));
  });
}, 2500);
