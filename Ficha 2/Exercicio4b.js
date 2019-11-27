let number;
do{
    number = +prompt('Number')
    console.log(letsGo(number));
}while(!letsGo(number))

function letsGo(number){
    let sum = 0
    for (let i = 1; i <= number/2; i++) {
        if(number % i === 0){
            sum += i
        }
    }
    if (sum === number && sum !== 0) {
        return true
    }
    else{
        return false
    }
}