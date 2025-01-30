const express = require('express');
const app = express();

// Serve static files from the "public" folder
app.use(express.static('public'));

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
