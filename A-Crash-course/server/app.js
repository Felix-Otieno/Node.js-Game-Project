const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog'); // Ensure correct path

const app = express();

// MongoDB Connection
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.lirov.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=NodeTuts';
mongoose.connect(dbURI)
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch((err) => console.log(err));

// Middleware
app.use(morgan('dev')); // Moved up
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'New blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  });

  blog.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// Fixed route for fetching a single blog by ID
app.get('/single-blog/:id', (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  const blogs = [
    { title: 'A good day', snippet: 'All Glory to God' },
    { title: 'Praises to the Most High God', snippet: 'Dear Heavenly Father, YOU are worthy to be praised.' },
    { title: 'Repentance', snippet: 'God, make me innocent of the sins I am unaware of, AMEN' },
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog' });
});

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
