var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static('./public/UI'));



app.set('port', (process.env.PORT || 5000));

http.listen(5000);


var route = "/";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './public/UI/index.html'));
});

var route = "/windows";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './public/UI/windows.html'));
});

var route = "/osx";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './public/UI/osx.html'));
});



//welcome message
console.log("Running vm2");

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {

    socket.broadcast.emit('welcome', { message: 'Welcome!' });

    socket.on('fook', function(resx) {
      console.log('Scan event detected, cascading event');
           io.emit('scan', { data: resx });

    });

});

// http.listen(app.get('port'), function() {
//   console.log('listening on *:' + app.get('port'));
// });