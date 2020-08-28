// var testController = require('../../controllers/appChannels');

var serveFile = require('../utils/serveFile');
var bodyParser = require('../utils/bodyParser');
var queryParser = require('../utils/queryParser');

module.exports = function(router) {
  // gets list of channels for an app
  router.get('/', (request, response, params) => {
    serveFile(response, '../../../public/index.html');
  });
}
