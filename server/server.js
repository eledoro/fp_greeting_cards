const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const cardRoutes = require('./controllers/cardsRouter');

app.use('/cards', cardRoutes);

app.get('/', (req, res) => {
    res.send('Hello! this is main page');
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowd!');
});

module.exports = app;
