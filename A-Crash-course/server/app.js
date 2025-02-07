const express = require('express');
const morgan = require('morgan');

// Express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'A good day', snippet: 'All Glory to God'},
        {title: 'Praises to the Most High God', snippet: 'Dear Heavenly Father, YOU are worthy to be praised.'},
        {title: 'Repentance', snippet: 'God, make me innocent of the sins I am unaware of, AMEN'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});