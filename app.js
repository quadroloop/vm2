var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.static('./public/UI'));

// for networking theory demo

app.use(express.static('./public/public/UI/delta/'));




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

var route = "/delta";
app.get(route, function(req, res) {
  res.sendFile(path.join(__dirname, './public/UI/delta/delta.html'));
});


var port = 5000;

//welcome message
console.log("=======================")
console.log("     Running vm2       ");
console.log("=======================")
console.log("  vm2 server v.0.0.1");
console.log("------------------------");
console.log("listening on port: "+port);

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {

    socket.broadcast.emit('welcome', { message: 'Welcome!' });

    socket.on('fook', function(resx) {
      console.log('Scan event detected, cascading event');
           io.emit('scan', { data: resx });

    });

    socket.on("revert", (data)=>{
    	console.log("revert requested, by VM!");
    	io.emit("revert",{data: "reload all"});
    });

});

var ip;

var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      ip=iface.address;
    }
    ++alias;
  });
});
// http.listen(app.get('port'), function() {
//   console.log('listening on *:' + app.get('port'));
// });
console.log(`
  ===========================================
                 Instructions:
  ===========================================
   Instruct your students to connect
   to your wireless network, and go to this
   link using their browser:

   http://${ip}:5000

   after this they must be able to access the 
   vm2 web application.
  `);
