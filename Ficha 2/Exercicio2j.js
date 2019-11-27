showNames('Nuno', 'Sousa', 'John', 'Jess', 'Julia');

function showNames(name, surname, ...names){
    alert(`${name} ${surname} has ${names.length} friends`);
}