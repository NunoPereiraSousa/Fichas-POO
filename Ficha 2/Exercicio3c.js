//Prime numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
let count = 0;

if(primeNumber(4) === true){
    alert(`The number ${number} is prime.`)
} 
else{
    alert(`The number ${number} is not prime.`)
}

function primeNumber(number){

    //Transfer local variable to global
    window.number = number;

    for(let i = 0; i <= number; i++){
        if(number % i == 0){
            count++;
        }
    }
    if(count == 2){
        return true;
    }
    else{
        return false;
    }    
}