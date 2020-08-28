module.exports = function(request, callback) {
  var requestData = '';

  request.on('data', function(chunk) {
    requestData += chunk.toString();
  })
  request.on('end', function() {
    if (requestData === '') {
      callback(null, {});
    } else {
      var data;

      try {
        data = JSON.parse(requestData)
      } catch {
        data = null;
      }

      if (data) {
        callback(null, data);
      } else {
        callback("Request body must be valid JSON.", null);
      }     
    }
  })
}