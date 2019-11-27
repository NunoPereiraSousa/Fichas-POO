let exNumber = 1;

factorial(4);

function factorial(number){
    window.number = number;
    for(let i = 1; i <= number; i++){
        exNumber *= i;
    }
    return `${number}! = ${exNumber}`;
}
