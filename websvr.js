var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World, my name is Juan J Barillas");
  response.end();
});
server.listen(8001);