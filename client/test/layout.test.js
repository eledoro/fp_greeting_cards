/**
 * @jest-environment jsdom
 */


 const fs = require('fs');
 const path = require('path');
 const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
 
 describe('test index.html', ()=>{
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();


        form=document.querySelector('form');
        header = document.querySelector('h1');
        greetingInput = document.querySelector('#greeting');
        eventInput = document.querySelector('#event');
        messageInput = document.querySelector('#message');
        submitBtn = document.querySelector('#submit');
        resetBtn = document.querySelector('#reset');
        seeSavedBtn = document.querySelector('#seeSaved');
        saveCurrentCardBtn=document.querySelector('#saveCurrentCard')

    })
    // test mainPage layout exists
     test('header exists', ()=>{
        
         expect(header).toBeTruthy();
     })    
       test('form exists', ()=>{
         expect(form).toBeTruthy()
       })
       test('greeting input exists', ()=>{
        expect(greetingInput).toBeTruthy()
      })
      test('event input exists', ()=>{
        expect(eventInput).toBeTruthy()
      })

      test('messaget input exists', ()=>{
        expect(messageInput).toBeTruthy()
      })
      test('submit button exists', ()=>{
        expect(submitBtn).toBeTruthy()
      })
      test('reset button exists', ()=>{
        expect(resetBtn).toBeTruthy()
      })
      test(' see saved button exists', ()=>{
        expect(seeSavedBtn).toBeTruthy()
      })
      test(' save current card button exists', ()=>{
        expect(saveCurrentCardBtn).toBeTruthy()
      })

      
 //   ------------  placeholders
    test('it has a placeholder of "Greeting"', () => {
      expect(formGreeting.getAttribute('placeholder')).toBe('Type your greeting')
    
  })
      test('it has a placeholder of "Message"', () => {
      expect(formMessage.getAttribute('placeholder')).toContain('Type your message')
      })
  
      
  
  
 
  
      // ---------   has labels  
      test('Greeting has a label', () => {
        let label = document.querySelector('label[for="greeting"]')
      
      expect(label.textContent).toContain("Add your greeting")
      })
      test('Event has a label', () => {
        let label = document.querySelector('label[for="event"]')
      
      expect(label.textContent).toContain("Choose an event")
      })
      test('Message has a label', () => {
        let label = document.querySelector('label[for="message"]')
      
      expect(label.textContent).toContain("Add your message")
      })




 })