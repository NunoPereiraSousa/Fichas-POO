(() => {
    let attempt = 5;
    let randomNumber = Math.floor(Math.random() * 10 + 1);

    while(attempt-- > 0){
        let number = +prompt('What is your prediction?');

        if(number === randomNumber){
            alert('You won!');
            break;
        }
        else if(number > randomNumber){
            alert('Lower!');
        }
        else if(number < randomNumber){
            alert('Higher!');
        }
    }        
    if(attempt < 0){
        alert('Game over!');
    }
})()