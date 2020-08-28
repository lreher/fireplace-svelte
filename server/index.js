require('dotenv').config();

var http = require('http');
var router = require('../router');

module.exports = function() {
  var server = http.createServer(router);

  server.listen(process.env.SERVER_PORT);

  return server;
}
