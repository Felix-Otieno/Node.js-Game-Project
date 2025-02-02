const http = require('http');

const server = http.createServer((req, res) => {
      console.log("Request made");
});

server.listen(3000, 'localhost', () => {
   console.log("Listening on request from port 3000");
});