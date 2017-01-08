var http = require('http');

http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type' : 'text/html'});
    resp.write('<h1>Hello</h1>');
    resp.end('<h3>NodeJs</h3>');
}).listen(3000);

console.log('Server is running with the port 3000');
