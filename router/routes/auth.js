// var testController = require('../../controllers/appChannels');

var serveFile = require('../utils/serveFile');
var bodyParser = require('../utils/bodyParser');
var queryParser = require('../utils/queryParser');

module.exports = function(router) {
  // TODO, make better.
  router.get('/callback', (request, response, params) => {
    console.log(request.url);

    queryParser(request, function(error, query) {
      if (error) {
        response.writeHead(400);
        response.end();
      }

      console.log(query);

      var code = query.code;
      var userID = query.userID;

      serveFile(response, '../../public/index.html');
    });
  });
}
