const mysql = require('mysql-model')
module.exports =  mysql.createConnection({
  host     : 'tcp://0.tcp.ngrok.io',
  port     : 19300,
  user     : 'root',
  password : 'root',
  database : 'datasaurus'
});
