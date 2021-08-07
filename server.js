const io = require('socket.io')(3000);

io.on('connection', function(socket) {
    console.log("Connection Successful");

    socket.on('message-from-client', text => {
        console.log("Message from client: " + text);
        socket.broadcast.emit('message-from-server', { text: text });
    })
})