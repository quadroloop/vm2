var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static('./public/UI'));



app.set('port', (process.env.PORT || 5000));



var route = "/";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './public/UI/index.html'));
});

var route = "/admin";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './public/admin/examples/index.html'));
});



// Emit welcome message on connection
io.sockets.on('connection', function(socket) {
    socket.emit('welcome', { message: 'Welcome!' });

    socket.on('fook', function() {
      console.log('Scan event detected, cascading event');
    });
});

http.listen(app.get('port'), function() {
  console.log('listening on *:' + app.get('port'));
});