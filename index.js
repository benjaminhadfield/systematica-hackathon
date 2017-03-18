const express = require('express')
const server = require('socket.io')
const client = require('socket.io-client')
const http = require('http')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const connection = require('./server/database')

const app = express()
const httpServer = http.Server(app)
const io = server(httpServer)
const dataSocket = client.connect('http://emsapi.eu-west-2.elasticbeanstalk.com')

app.use(express.static(__dirname + '/public'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({extended: false}))


// on client connection
io.on('connection', (socket) => {
    console.log(`client connected (${socket.id})`)
    
    // connect to the data source
    dataSocket.emit('subscribe', ['AAPL'])
    dataSocket.on('onMarketData', (data) => socket.broadcast.emit('recievedUserMarketData', data))
})

httpServer.listen(3000, () => {
    console.log('listening on :3000')
})
