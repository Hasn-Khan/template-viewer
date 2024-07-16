const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/templates', (req, res) => {
  const templates = require('./data/templates.json');
  res.json(templates);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
