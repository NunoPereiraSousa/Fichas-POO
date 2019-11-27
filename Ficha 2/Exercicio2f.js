let number1 = +prompt('Write a number:');
let number2 = +prompt('Write another number:');
let number3;
function numbersInterval(){

    if(number1 > number2){
        number3 = number2;
        number2 = number1;
        number1 = number3;
    }

    for(let i = number1; i <= number2; i++){
        console.log(i);
    }
}

numbersInterval();