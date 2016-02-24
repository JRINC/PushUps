var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8899);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
  socket.emit('news', { data: 'Server UP' });
  socket.on('my other event', function (data) {});
});
app.post('/notificaciones', function(request, respond) {
    request.on('data', function(data) {
		var body = JSON.parse(data);
		io.sockets.emit('news', body);
		respond.end();
    });
});
