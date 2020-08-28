var router = require('find-my-way')({
  defaultRoute: (request, response) => {
    response.writeHead(404);
    response.end('URL Not Found.')
    return;
  },
  onBadUrl: (path, request, response) => {
    response.writeHead(400);
    response.end('Bad Request.')
    return;
  }
});

require('./routes/serve')(router);
require('./routes/auth')(router);

module.exports = function(request, response) {
  router.lookup(request, response);  
}