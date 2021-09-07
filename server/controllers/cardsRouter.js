const express = require('express');
const router = express.Router();


const Card = require('../models/cardsClass');


router.get('/', (req, res) => {
    const cardsData = Card.all;
    res.send(cardsData);

});

router.get('/:id', (req, res) => {
    try {
        const cardId = parseInt(req.params.id);
        const selectedCard = Card.filterById(cardId);
        res.send(selectedCard);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});


router.get('/:eventType', (req, res) => {
    try {
        const cardEvent = req.params.eventType;
        const selectedCards = Card.filterByEvenType(cardEvent);
        res.send(selectedCards);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.post('/', (req, res) => {
    const data = req.body;
    const newCard = Card.addNewCard(data);
    res.status(201).send(newCard);
});


router.delete('/:id', (req, res) => {
    const cardId = parseInt(req.params.id);
    const cardToDelete = Card.findById(cardId);
    cardToDelete.deleteCard();
    res.status(204).send();
});




module.exports = router;
