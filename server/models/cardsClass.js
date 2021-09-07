const cardsData = require('../data');

class Card {
    constructor(data){
        this.id = data.id;
        this.eventType = data.eventType;
        this.greeting = data.greeting;
        this.message = data.message;
        this.background = data.background;
    }

    static get all() {
        const cards = cardsData.map((card) => new Card(card));
        return cards;
    }
    static filterByEvenType(eventType) {
        try {
            const cardsData = cardsData.filter((card) => card.eventType === eventType);
            const card = new Card(cardsData);
            return card;
        } catch (err) {
            throw new Error('There is no cards for this occasion!');
        }
    }

    static filterById(id) {
        try {
            const cardsData = cardsData.filter((card) => card.id === id);
            const card = new Card(cardsData);
            return card;
        } catch (err) {
            throw new Error('There is no card with this id!');
        }
    }



    static addNewCard(card){
        const newCardId=cardsData.length +1;
        const newCard = new Card({id:newCardId, ...card});
        cardsData.push(newCard);
        return newCard;
    } 

    deleteCard() {
        const card = cardsData.filter((card) => card.id === this.id)[0];
        cardsData.splice(cardsData.indexOf(card), 1);
    }

}



module.exports = Card ;
