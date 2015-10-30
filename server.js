var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //tells node to strat a new server with app PORT
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
	console.log('User connected via socket.io');

	socket.on('message', function(message) {
		console.log('message received: ' + message.text);
		io.emit('message', message);     //sends to everyoune including the sender himself
		//socket.broadcast.emit('message', message);  //send to everyone except the sender
	});

	socket.emit('message', {
		text: 'Welcome to the chat application!'
	});
});

http.listen(PORT, function() {
	console.log('Server started!');
});