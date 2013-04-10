var http = require('http')
var url = require("url");

var port = process.env.PORT || 1337;

function start() {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
    	response.writeHead(200, {"Content-Type": "text/plain"});
    	response.write("Hello World" + pathname);
    	response.end();
  }

  http.createServer(onRequest).listen(port);
}

exports.start = start;
