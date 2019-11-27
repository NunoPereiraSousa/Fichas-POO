const grades = [{
        name: 'Rui',
        grade: 8
    },
    {
        name: 'Ana',
        grade: 12
    },
    {
        name: 'Carla',
        grade: 14
    }
]

//Exercise 3 b.
let name = prompt('Name')
let grade = +prompt('Grade')

let addData = (name, grade) => {
    const newObj = {
        name: name,
        grade: grade
    }

    /*
    const newObj = {name, grade}
    */
    grades.push(newObj)
    //console.table(grades);
}
addData(name, grade);

//Exercise 3 c.
let calculateGradesAverage = () => {
    let sum = 0;
    for (const objects of grades) {
        sum += objects.grade;
    }
    console.log(sum / grades.length);
}
calculateGradesAverage()

//Exercise 3 d.
showGradesAboveTen();

function showGradesAboveTen() {
    let result = ''
    for (const prop of grades) {
        if (prop.grade >= 10) {
            result += `${prop.name} \n`;
        }
    }
    console.log(result);
}