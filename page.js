const http = require('http');
const url = require('url');
const fs = require('fs');

function req(request, respond) {
    const base = url.parse(request.url);
    const pathname = base.pathname === '/' ? '/index.html' : base.pathname; // Default to index.html
    const fileName = '.' + pathname;

    console.log(`Requested file: ${fileName}`);

    fs.readFile(fileName, (error, data) => {
        if (error) {
            respond.writeHead(404, { 'Content-Type': 'text/plain' });
            respond.write('404 Not Found');
        } else {
            respond.writeHead(200, { 'Content-Type': 'text/html' });
            respond.write(data);
        }
        respond.end();
    });
}

http.createServer(req).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
