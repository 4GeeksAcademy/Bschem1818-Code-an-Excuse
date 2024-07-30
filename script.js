window.onload = function (){

   let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
   let action = ['ate', 'peed', 'crushed', 'broke'];
   let what = ['my homework', 'my phone', 'the car'];
   let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let whoRd = Math.floor(Math.random() * who.length);
let actionRd = Math.floor(Math.random() * action.length);
let whatRd = Math.floor(Math.random() * what.length);
let whenRd = Math.floor(Math.random() * when.length);

document.querySelector('#excuse').innerHTML = who[whoRd] +" "+ action[actionRd] +" "+ what[whatRd] +" "+ when[whenRd];

};