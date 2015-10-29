var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //tells node to strat a new server with app PORT
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(){
	console.log('User connected via socket.io');
});

http.listen(PORT, function() {
	console.log('Server started!');
});