const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(4000, function() {
	console.log('listening port number 4000');
});

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function(socket) {
	console.log('socket is connected with server ' + socket.id);

	socket.on('chat', function(data) {
		console.log(data);
		io.sockets.emit('chat', data);
	});
});

