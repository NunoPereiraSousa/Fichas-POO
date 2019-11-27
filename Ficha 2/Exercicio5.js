let randomNumber = Math.floor(Math.random() * 10 + 1);
alert(randomNumber);
let attempts = 0;
let attemptsLimit = 5
let number = 0;

let guessNumber = (randomNumber, number) => {
    if(number === randomNumber){
        return 0;
    }
    else if(number > randomNumber){
        return 1;
    }
    else{
        return -1;
    }
}

do{
    number = +prompt('What is your guess?');   
    attempts++;

    if(guessNumber(randomNumber, attempts) === 0){
        alert('You won!');
        break;
    }
    else if(guessNumber(randomNumber, attempts) === 1){
        alert('Lower!');
    }
    else{
        alert('Higher!');
    }
    
}while(attempts < attemptsLimit);
if(attempts === attemptsLimit){
    alert('Game over');
}