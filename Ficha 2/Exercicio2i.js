numbersSum(1, 2, 3);

function numbersSum(number1, number2, number3, ...numbers){
    let result = '';
    for(let i = 0; i < arguments.length;i++){
        result += arguments[i];
    }
    alert(result);
}