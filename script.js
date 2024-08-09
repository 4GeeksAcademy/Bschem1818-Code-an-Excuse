window.onload = function (){
let english = ""

   let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
   let action = ['ate', 'peed', 'crushed', 'broke'];
   let what = ['my homework', 'my phone', 'the car'];
   let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function grammar(a) {
    return a [Math.floor(Math.random() * a.length)];
}

for (let i = 0; i <= 5; i++) {
       english += `${grammar(who)} ${grammar(action)} ${grammar(what)} ${grammar(when)} <br>`;   

   
}

document.querySelector('#excuse').innerHTML = english;

};