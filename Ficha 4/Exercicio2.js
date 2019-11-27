const student = [{
    name: "David Silva",
    course: "POO",
    grade: 12
    },
    {
    name: 'Nuno',
    course: 'AED',
    grade: 14
    }
]

//Exercise 2 b.
for (const prop of student) {
    console.log(prop.name)
}

//Exercise 2 c.
let removeGrade = () => delete student.grade
removeGrade()
console.table(student);

//Exercise 2 d.
let count = 0;
let objectLength = () => {
    for (const prop in student) {  
        count++
    }
}
objectLength()
console.log(count);