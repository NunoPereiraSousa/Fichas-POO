let num1 = +prompt('Base');
let num2 = +prompt('Power');

if (num1 <= 1 || isNaN(num1)) {
    alert('The base has to be higher than 0')
}
else if(num2 <= 1 || isNaN(num2)){
    alert('The power has to be higher than 0')
}
else{
    calculatePow(num1, num2);
}

function calculatePow(num1, num2){
    console.log(num1 ** num2);
}