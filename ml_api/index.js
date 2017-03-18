const connection = require('../server/database')
var Entry = require('../models/entry.js')(connection)
var express = require('express')
var app = express()
const server = require('socket.io')
const client = require('socket.io-client')
const http = require('http')


const httpServer = http.Server(app)
const io = server(httpServer)
const dataSocket = client.connect('http://127.0.0.1:3000')


//ML Classifiers
var aaplClassifier = null;
var mlCallback = function(classifier){
  aaplClassifier = classifier;
};



var reg_model = require('./ml/regression_model.js');
reg_model.train(Entry, mlCallback)
setInterval(function(){
  reg_model.train(Entry, mlCallback)
}, 300000);

io.on('connection', (socket) => {
    console.log(`client connected (${socket.id})`)

    // connect to the data source
    dataSocket.emit('subscribe', ['AAPL', 'MSFT'])
    dataSocket.on('onMarketData', function(data){
      console.log('data', data)
    })
})


httpServer.listen(8080, () => {
    console.log('listening on :8080')
})
