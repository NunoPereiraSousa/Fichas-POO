/* (()=>{
    //Exercise 3 a.
//Create tags
const tableTag = document.createElement('table');
const tr1 = document.createElement('tr');
const tr2 = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const td1 = document.createElement('td');
const td2 = document.createElement('td');

//AppendChild - tags
tableTag.appendChild(tr1);
tableTag.appendChild(tr2);
tr1.appendChild(th1);
tr1.appendChild(th2);
tr2.appendChild(td1);
tr2.appendChild(td2);

//Create text content
const headerText1 = document.createTextNode('Escola');
const headerText2 = document.createTextNode('Local');
const dataText1 = document.createTextNode('ESMAD');
const dataText2 = document.createTextNode('Vila do Conde');

//AppendChild - text nodes
th1.appendChild(headerText1);
th2.appendChild(headerText2);
td1.appendChild(dataText1);
td2.appendChild(dataText2);

document.body.appendChild(tableTag);
})(); */

//Exercise 3 b.
let header1 = 'Escola';
let header2 = 'Local';
let data1 = 'ESMAD';
let data2 = 'Vila do Conde';
let table = document.createElement('table');
table.innerHTML = `<tr>
                        <th>${header1}</th>
                        <th>${header2}</th>
                    </tr>
                    <tr>
                        <td>${data1}</td>
                        <td>${data2}</td>
                    </tr>`;
document.body.appendChild(table);

//Exercise 3 c.
let data3 = `<tr>   
                <td>ISEP</td>
                <td>Porto</td>
            </tr>`;
table.innerHTML += data3;

//Exercise 3 d.
/*
const newTd = document.createElement('td');
const newTdText = document.createTextNode('Vila do Conde/ Póvoa do Varzim');
newTd.appendChild(newTdText);

const tdParent = document.querySelectorAll('tr')[1];
tdParent.replaceChild(newTd, tdParent.children[1])  */

const lastTd = document.querySelector('td:last-of-type');
lastTd.innerHTML = 'Vila do Conde/ Povoa do Varzim';

//Exercise 3 e.
/* const parent = table.children[0];
parent.removeChild(parent.children[0]); */

const tbody = document.querySelector('tbody');
const tr = document.querySelector('tr');
tbody.removeChild(tr);
