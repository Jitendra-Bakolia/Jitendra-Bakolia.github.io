const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.get('/message', (req, res) => {
  console.log('Received GET request with data:', req.body);
  res.json({ message: 'Server received the data successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
