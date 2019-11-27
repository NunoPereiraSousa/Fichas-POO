let menu = {
    width: 200,
    height: 300,
    title: "My menu"
    }

console.table(menu)

multiplyNumeric(menu)

console.table(menu)
  
function multiplyNumeric(menu){
    let multiply = 2;
    for (const prop in menu) {
        if(typeof menu[prop] === 'number'){
            menu[prop] *= multiply
        }
    }
}