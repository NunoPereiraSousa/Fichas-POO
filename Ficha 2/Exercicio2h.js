calculateMultiplicationTable(5);

function calculateMultiplicationTable(number){
    if (!number) {
        number = 1;
    }
    let result = '';
    for(let i = 1; i <= 10; i++){
        result += `${number} x ${i} = ${number * i} \n`;
    }
    alert(result);
}
