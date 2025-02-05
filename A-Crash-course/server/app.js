const express = require('express');

// Express app
const app = express();

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// Redirects
app.get('/about-us', (req, res) => {
     res.redirect('/about');
});

//404 page
app.use((req, res) => {
    res.sendFile('./views/404.html', { root: __dirname });
});