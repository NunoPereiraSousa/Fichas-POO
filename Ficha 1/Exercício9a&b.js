//Ex 9 a.
if ("0") {
    alert( 'Hello' );
    }
//Será mostrado!!

//Ex 9 b.
let answer = prompt('Whats the official name of JavaScript?');
answer == 'ECMAScript' ? alert('Right!') : alert('You dont know? it is ECMAScript!');

//Ex 9 c.
let number = prompt('Write a number');
if(number < 0 ){
    alert('-1');
}
else if(number > 0){
    alert('1');
}
else{
    alert('0');
}

//Ex 9 d.
let a, b, result;
(a+b>4) ? result = 'Below' : result = 'Over';

//Ex 9 e.
let login;
let message;
(login == 'Employee') ? message = 'Hello' : login == 'Director' ? message = 'Greetings' : login == '' ? message = 'No login' : message = '';