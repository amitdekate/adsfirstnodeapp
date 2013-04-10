var http = require('http')
var url = require("url");

var port = process.env.PORT || 1337;

console.log("this is a test");

function start() {
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
    	response.writeHead(200, {"Content-Type": "text/plain"});
    	response.write("Hello World");
    	response.end();
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started.");
}

exports.start = start;
