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
        greetingInput = document.querySelector('#greeting');
        eventInput = document.querySelector('#event');
        messageInput = document.querySelector('#message');
        submitBtn = document.querySelector('#submit');
        resetBtn = document.querySelector('#reset');

    })
    // test mainPage layout exists
     test('header exists', ()=>{
         header = querySelector('h1');
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

 })