// import data
const cardsData = require('../data');
// import model
const Card = require('../models/cardsClass');

describe('Card model', () => {
    const testCard = {
        eventType: 'Birthday',
        message: 'HB to you',
        greeting:'Hi',
        background:'',
        
    };

    it('should make an instance of a card', () => {
        const card = new Card({id:10, ...testCard});

        expect(card.greeting).toBe('Hi');
        expect(card.message).toBe('HB to you');
    });

    it('should return all cards', () => {
        const allCards = Card.all;

        expect(allCards).toEqual(cardsData);
    });

  it('should add a new card',() =>{
    const newCardId=cardsData.length +1;
    const newCard = Card.addNewCard(testCard);

    expect(newCard).toEqual({id: newCardId, ...testCard})
  })

  it('should delete a card', ()=>{
    const cardToDeleteId = cardsData.length;
        const cardToDelete = cardsData[cardToDeleteId - 1];
        cardToDelete.deleteCard();

        expect(cardToDelete).toEqual({ id: cardToDeleteId, ...testCard });
        expect(cardsData).not.toContain(cardToDelete);

  })


})



