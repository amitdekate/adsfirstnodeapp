function route(pathname, response) {
  response.write("About to route a request for " + pathname);
}

exports.route = route;