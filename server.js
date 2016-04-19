http = require('http');
fs = require('fs');
var io = require('socket.io').listen(server);

var server = http.createServer(function(request,response){
	fs.readFile('index.html','utf-8', function(error, data){
	response.writeHead(200,{'content-type': 'text/html'});
	response.write(data);
	response.end();
	})

});
var io = require('socket.io').listen(server);
io.sockets.on('connect',function(socket){
	console.log("someone connected to server");
	socket.on('message_to_server', function(data){
		io.sockets.emit('message_to_client',{message: data.message})
		})
	})

server.listen(8000);
console.log('listening on port 8000');