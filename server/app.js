const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('Received POST request with data:', req.body);
  res.json({ message: 'Server received the data successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
