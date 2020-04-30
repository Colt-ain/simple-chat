// Make connection
const socket = io.connect('http://localhost:4000');

// QUery DOM

const message = document.getElementById('message'),
	handle = document.getElementById('handle'),
	btn = document.getElementById('btn'),
	output = document.getElementById('output');

// Emit events

btn.addEventListener('click', function () {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

// listen for events

socket.on('chat', function(data) {
	console.log(data);
	output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});
