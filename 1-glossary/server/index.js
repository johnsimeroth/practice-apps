require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db.js');


const app = express();

// middleware for one and all

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// routes

app.get('/terms', (req, res) => {
  db.getAll()
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(('error retrieving values: ' + err)));
});

app.post('/terms', (req, res) => {
  db.add(req.body)
    .then(() => (db.getAll()))
    .then((results) => res.status(201).send(results))
    .catch(err => res.status(500).send('error adding and retrieving updated values: ' + err));
});

app.put('/terms/:termID', (req, res) => {
  const termID = req.params.termID;
  db.update(req.body, termID)
    .then(() => (db.getAll()))
    .then((results) => res.status(200).send(results))
    .catch(err => res.status(500).send('error updating and retrieving latest values: ' + err));
});


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
