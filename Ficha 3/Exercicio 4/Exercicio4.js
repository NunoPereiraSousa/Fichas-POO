//Exercise 1 a. III.
let buttonAction = document.getElementById('button');
buttonAction.addEventListener('click', function(){
    alert('Hello World!');
})

//Exercise 1 b.
let addText = document.getElementById('button');
let input = document.getElementById('myInput');
let paragraphText = document.getElementById('p1');
addText.addEventListener('click', function(){
    paragraphText.innerHTML = input.value;
    //Obtain length of the input: paragraphText.innerHTML = input.value.length;
})

//Exercise 1 c.
let buttonClick = document.getElementById('button');
buttonClick.addEventListener('mouseup', function(){
    alert('Thank for pressing this button!');
})

//Exercise 1 d.
window.addEventListener('load', function(){
    //Code...
    alert('Thank for pressing this button!');
})