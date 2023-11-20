const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"../client/assets")))

// Custom middleware for handling CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Set the appropriate origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Specify the allowed HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // Specify the allowed headers

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/message', (req, res) => {
  console.log('Received GET request with data:', req.body);
  res.json({ message: 'Server received the data successfully!' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"../client","index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
