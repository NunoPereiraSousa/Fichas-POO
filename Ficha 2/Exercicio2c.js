let number1 = +prompt('Pick a number:');
let operator = prompt('Pick an operator (+, -, *, /)');
let number2 = +prompt('Pick another number:');

function calculate(){
    if(operator == '+' && number1 != null && number2 != null){
        alert(number1 + number2);
    }
    else if(operator == '-' && number1 != null && number2 != null){
        alert(number1 - number2); 
    }
    else if(operator == '*' && number1 != null && number2 != null){
        alert(number1 * number2);
    }
    else if(operator == '/' && number1 != null && number2 != null){
        if(number2 != 0){
            alert(number1 / number2);
        }
        else{
            alert(`You can't divide by 0`);
        }
    }
    else{
        alert('Insert only the correct operators.');
    }

    /*
    switch(operator){
        case '+':
        alert(`Result = ${number1 + number2}`);
        break;

        case '-':
        alert(`Result = ${number1 - number2}`);
        break;

        case '/':
        if(number2 === 0){
            alert('You cant divide by 0');
        }
        else{
            alert(`Result = ${number1 / number2}`);
        }
        break;

        case '*':
        alert(`Result = ${number1 * number2}`);
        break;

        default:
        alert('Invalid operator');
    }
    */
}

console.log(calculate());