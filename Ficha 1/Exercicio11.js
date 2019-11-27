//Ex 11 a.
let i = 3;
while (i) {
alert( i-- );
} // 3,2,1.

//Ex 11 bI.
let i = 0;
while (++i < 5){
    alert(i); // Vai ate ao 4
} 

//Ex 11 bII.
let h = 0;
while (h++ < 5){
    alert(h); //Vai ate ao 5
}

//Ex 11 cI.
for (let i = 0; i < 5; i++) alert( i ); // 0 - 4

//Ex 11 cII.
for (let i = 0; i < 5; ++i) alert( i ); // 0 - 4

//Ex 11 d.
for(let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//Ex 11 e.
for (let i = 0; i < 3; ++i) {
    alert( `number ${i}!` );
    }

//Ex 11 f.
let i;

while(i != 0){
    let number = prompt('Write a number above 100');
    if(number < 100){
        prompt('Write a number above 100');
    }
    else{
        alert('Right!');
        break;
    }
}

//Ex 11 g.
let number = prompt('Write a number');
let count = 0;
for(let i = 2; i < number; i++){
    if(number % i == 0){
        count++;
    }
}
for(let i = 2; i < number; i++){
    if(count == 2){
        console.log(i);
    }
}