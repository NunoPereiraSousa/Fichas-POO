const movies = []

const form = document.querySelector('#myForm')
form.addEventListener('submit', function(event){

    document.querySelector('#title').maxLength = 50

    document.querySelector('#year').min = 1980

    document.querySelector('#year').max = 2019

    checkValidation()
    
    event.preventDefault()
})

function checkValidation(){
    
    
    
    const year = document.querySelector('#year').value
    const title = document.querySelector('#title').value
    const options = document.querySelector('#options').value

    console.log(document.querySelector('#title').maxLength);    

    if (year >= document.querySelector('#year').min
     && year <= document.querySelector('#year').max) {
        const movie = {
            title: title,
            year: year,
            options: options
        }
        feedTable()
        movies.push(movie)
        console.table(movies)
    }
    else{
        if(year < document.querySelector('#year').min){
            alert('The year has to be higher')
        }
        else{
            alert('The year has to be lower')
        }
    }
}

function feedTable(){
    const table = document.querySelector('table')
    const year = document.querySelector('#year').value
    const title = document.querySelector('#title').value
    const options = document.querySelector('#options').value

    table.innerHTML += `<tr>
                            <td>${title}</td>
                            <td>${year}</td>
                            <td>${options}</td>
                            <td><button onclick="removeMovie('${title}')">X</button></td>
                        </tr>`
}

function removeMovie(title){
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].title === title){
            movies.splice(i, 1)
        }
    }
    console.table(movies)
}