const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Serve index.html file
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

io.on("connection", function(socket) {
    console.log("A user connected");

    // Notify all users that a new user has connected
    io.emit("user connected");

    // Listen for incoming messages from clients
    socket.on("message", function(msg) {
        console.log("Message received: " + msg);
        io.emit("message", msg); // Broadcast message to all users
    });

    // Handle user disconnect
    socket.on("disconnect", function() {
        console.log("A user disconnected");
    });
});

// Start the server on port 3000
http.listen(3000, () => console.log("listening on http://localhost:3000"));
