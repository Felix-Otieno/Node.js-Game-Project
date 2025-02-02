const express = require('express');
const { dirname } = require('path');
const app = express();
const port = 3000;
const http = require('http').Server(app);
const socket = require('socket.io')(http);
let players = [];

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

socket.on('connection', function(s) {
    console.log("Client connected");
    s.on('new player', function(id, name) {
        console.log("Received player name:", id);
        console.log(name);
        players.push({
            name: name,
            id: id
        });
        socket.emit('players', players);
    });
    socket.emit('players', players);
});

const server = http.listen(port, function() {
    console.log("Ready " + port);
});