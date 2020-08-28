// var testController = require('../../controllers/appChannels');

var bodyParser = require('../utils/bodyParser');
var queryParser = require('../utils/queryParser');

module.exports = function(router) {
  // gets list of channels for an app
  router.get('/test', (request, response, params) => {
    response.writeHead(200);
    response.end('tested');
  });
}
