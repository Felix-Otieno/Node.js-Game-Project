const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');

// Express app
const app = express();

// Connect to Mongodb
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.lirov.mongodb.net/?retryWrites=true&w=majority&appName=NodeTuts';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


// Register view engine
app.set('view engine', 'ejs');


// middleware and static files
app.use(express.static('public'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'New blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });


  blog.save()
       .then((result) => {
        res.send(result);
       })
       .catch((err) => {
        console.log(err);
       });
});

app.get('/all-blogs', (req, res) => {
   Blog.find()
   .then((result) => {
    res.send(result);
   })
   .catch((err) => {
    console.log(err);
   });

});

app.get('single-blog', (req, res) => {
    Blog.findById()
    .then((result) => {
        res.send(result);
       })
       .catch((err) => {
        console.log(err);
       });
});


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