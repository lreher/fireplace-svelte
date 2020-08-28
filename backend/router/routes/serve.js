// var testController = require('../../controllers/appChannels');

var serveFile = require('../utils/serveFile');
var bodyParser = require('../utils/bodyParser');
var queryParser = require('../utils/queryParser');

module.exports = function(router) {
  // TODO, make better.
  router.get('/', (request, response, params) => {
    serveFile(response, '../../../public/index.html');
  });

  router.get('/global.css', (request, response, params) => {
    serveFile(response, '../../../public/global.css');
  });

  router.get('/build/bundle.css', (request, response, params) => {
    serveFile(response, '../../../public/build/bundle.css');
  });

  router.get('/build/bundle.js', (request, response, params) => {
    serveFile(response, '../../../public/build/bundle.js');
  });

}
