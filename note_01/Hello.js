var http = require('http');

module.exports = {
    createServer1 : function(port){

        http.createServer(function(req, resp){
            resp.writeHead(200, {'Content-Type' : 'text/html'});
            resp.write('<h1>Hello</h1>');
            resp.end('<h3>NodeJs1</h3>');
        }).listen(port || 3000);

        console.log('Server is running with the port ' + (port || 3000));
    },

    createServer2 : function(port){
        var server = http.createServer();
        //对request事件进行侦听
        server.on('request', function(req, resp){
            resp.writeHead(200, {'Content-Type' : 'text/html'});
            resp.write('<h1>Hello</h1>');
            resp.end('<h3>NodeJs2</h3>');
        });
        server.listen(port || 3000);

        console.log('Server is running with the port ' + (port || 3000));
    }
}
