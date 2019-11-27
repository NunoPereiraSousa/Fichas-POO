let number1 = +prompt('Number1:');
let number2 = +prompt('Number2:');
let result = 1;

let showNumbers = (number1, number2) => {

    for(let i = number1; i <= number2; i++){
        if(i % 3 === 0){
            result += i;
        }
    }
    alert(result);
}
showNumbers(number1, number2);