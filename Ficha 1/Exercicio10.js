//Ex 10 a.
alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //alert(1)
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //alert(1)
alert( null || 2 && 3 || 4 ); //4

//Ex 10 b.
let idade;
if(idade >= 14 && idade <= 90){
    //Codigo
}

//Ex 10 c.
if(idade < 14 && idade > 90){
    //Codigo
}

if(!(idade < 14 && idade > 90)){
    //Codigo
}

//Ex 10 d.
if (-1 || 0) alert( 'first' ); // -1
if (-1 && 0) alert( 'second' ); // 0
if (null || -1 && 1) alert( 'third' ); //1

//Ex 10 e.
let text = prompt('Who is there?');

if(text == 'Admin'){
    let password = prompt('What is the password?');

    if(password == 'TheMaster'){
        alert('Welcome!');
    }
    else if(password == '' || password == null){
        alert('Canceled');
    }
    else{
        alert('I dont know you!');
    }
}
else if(text == '' || text == null){
    alert('Canceled');
}
else{
    alert('I dont know you');
}