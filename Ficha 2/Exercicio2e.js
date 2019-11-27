let s = prompt('Write a string:');
let n = +prompt('Write a number:');
function echoSimulator(){
    let save = '';
    for(let i = 0; i < n; i++){
        save += s;
    }
    alert(save);
}

echoSimulator();