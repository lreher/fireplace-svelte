require('dotenv').config();

var http = require('http');
var router = require('../router');

module.exports = function() {
  var server = http.createServer(router);

  console.log("Starting server on port: " + process.env.SERVER_PORT);

  server.listen(process.env.SERVER_PORT);

  return server;
}
