// for submit click event
let submitBtn = document.querySelector('#submit');
let form = document.querySelector('#mainForm')
let card = document.querySelector('.card');

// for generating card content
let congratsPhrase ={
    birthday : "Happy Birthday!!!",
    wedding : "Congratulations on your wedding day!!!",
    getWell : "Get well soon!",
    christmas: "Merry Christmas!"
} 


let inputGreetingtText = document.querySelector('#greeting').textContent;
let inputMessageText = form.message;

let cardGreetingText = document.getElementById('cardGreeting') ;
let cardMessageText = document.getElementById('cardMessage');
let cardEventText = document.getElementById('cardEvent')


submitBtn.addEventListener('click', (event)=>{

 event.preventDefault();
 form.style.display = 'none';
 card.style.display = 'flex';

 let inputEvent = document.getElementById('event').value;


 console.log(document.getElementById('greeting').value)
 cardMessageText.textContent=document.getElementById('message').value;
 cardGreetingText.textContent =document.getElementById('greeting').value;
 cardEventText.textContent = congratsPhrase[inputEvent];

})