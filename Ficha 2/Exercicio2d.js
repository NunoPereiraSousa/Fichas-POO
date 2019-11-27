let weight = +prompt('Write your own weight:');
let height = +prompt('Write your own height:');
height /= 100;

let imc = weight / (height * height);

function calculateIMC(){
    return imc.toFixed(2);
}

function classifyIMC(){
    if(imc < 18.5){
        alert(`${imc.toFixed(1)} - Abaixo do peso`);
    }
    else if(imc >= 18.5 && imc < 24.9){
        alert(`${imc.toFixed(1)} - Peso normal`);
    }
    else if( imc >= 24.9 && imc < 29.9){
        alert(`${imc.toFixed(1)} - Sobrepeso`);
    }
    else if( imc >= 30 && imc < 34.9){
        alert(`${imc.toFixed(1)} - Obesidade Grau I`);
    }
    else if( imc >= 35 && imc < 39.9){
        alert(`${imc.toFixed(1)} - Obesidade Grau II`);
    }
    else{
        alert(`${imc.toFixed(1)} - Obesidade Grau III ou Morbida`);
    }
}

classifyIMC();