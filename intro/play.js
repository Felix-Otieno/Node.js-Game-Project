const express = require('express');
const app = express();
const port = 3000;
const http = require('http').Server(app);
const io = require('socket.io')(http);
const lodash = require('lodash');

let players = [];
let round = 0;

app.use(express.static(__dirname + '/public'));

http.listen(port, function(){
     console.log("Ready");
});

io.on('connection', function(socket) {
       socket.on('new player', function(id, name) {
        console.log(id);
        console.log(name);
       });
});