let number = +prompt('Write a number between 100 and 999');

let checkCapybara = number => {
    if(number < 100 || number > 999){
        alert('The number does not match with the range (100-999)');
    }

    number = number.toString();

    if(number[0] === number[2]){
        return true;
    }
    else{
        return false;
    }
}

alert(checkCapybara(number));