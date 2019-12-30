const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getData/:param', (req, res) => {
  let { param } = req.params;
  db.getData(param, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/postData/:param', (req, res) => {
});

app.get('/api/collection', (req, res) => {
});

app.delete('/api/collection/:cardID', (req, res) => {
});

app.delete('/api/collection', (req, res) => {
});

app.listen(port, () => console.log(`Listening on port ${port}!`));