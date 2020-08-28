module.exports = function(request, callback) {
  var query = request.url.split('?')[1];
  var parameters = {};

  // If query is passed, ensure its valid
  if (query) {
    var queries = query.split('&');

    queries.map((assignment) => {
      params = assignment.split('=');
      
      if (params.length !== 2) {
        callback('Query formated incorrectly. Parameters must be delimited by equal signs.', null);
      }

      if (parameters[params[0]]) {
        callback('Query formated incorrectly. Repeated parameters.', null);
      }

      parameters[params[0]] = params[1];
    });
  }
  
  callback(null, parameters);
}