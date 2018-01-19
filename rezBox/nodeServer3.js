// node server:

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('chewy was asked for the URL: ' + req.url); 
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('server3');
	res.end();
});

server.listen(3000, '127.0.0.1');
console.log('chewy on 3000');

