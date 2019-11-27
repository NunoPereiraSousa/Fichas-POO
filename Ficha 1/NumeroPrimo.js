let number = +prompt('Write a number');
let count = 0;
for(let i = 1; i <= number; i++){
    if(number % i == 0){
        count++;
    }
}

if(count == 2){
    alert('O numero e primo');
}
else{
    alert('O numero nao e primo');
}