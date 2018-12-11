var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('text-message', function (msg) {
        io.emit('text-message', msg);
        io.emit('user_id', socket.id)

    });

    socket.on('enable-or-disable-text', function (msg) {
        io.emit('enable-or-disable-text', msg, socket.id)
    });
});



http.listen(3000, function () {
    console.log('listening on port 3000');
});
