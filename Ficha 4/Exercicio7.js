const movies = []

//Max number in year's input
document.querySelector('#year').max = new Date().getFullYear();

const form = document.querySelector('#myForm')
form.addEventListener('submit', function (event) {

    const title = document.querySelector('#title').value
    const option = document.querySelector('#options').value
    const cover = document.querySelector('#cover').value
    const trailer = document.querySelector('#trailer').value

    if (isRepeated(title)) {
        //Create new object
        const movie = {
            title: title,
            option: option,
            cover: cover,
            trailer: trailer
        }
        movies.push(movie)
        console.table(movies)
        feedTable(movie)
    } else {
        alert('The movie already exists')
    }
    event.preventDefault()
})

function isRepeated(title) {
    for (const movie of movies) {
        if (movie.title.toLowerCase() === title.toLowerCase()) {
            return false
        }
    }
    return true
}

function feedTable() {
    const table = document.querySelector('table')
    const title = document.querySelector('#title').value
    const option = document.querySelector('#options').value
    const cover = document.querySelector('#cover').value
    const trailer = document.querySelector('#trailer').value

    table.innerHTML += `<tr>
                            <td>${title}</td>
                            <td>${option}</td>
                            <td><button onclick="showCover('${cover}')">Open Cover</button></td>
                            <td><button onclick="showTrailer('${trailer}')">Watch trailer</button></td>
                            <td><button onclick="removeObj('${title}')">Remove</button></td>
                            </tr>`
}

function showCover(cover) {
    const dialog = document.querySelector('#dlgCover')
    const image = document.querySelector('img')
    image.src = cover
    dialog.showModal()
}

function showTrailer(trailer) {
    const dialog = document.querySelector('#dlgCover')
    const iframe = document.querySelector('iframe')
    iframe.src = trailer
    dialog.showModal()
}

function removeObj(title) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title === title) {
            movies.splice(i, 1)
        }
    }
    console.table(movies)
    feedTable()
}

const button = document.querySelector('#close')
button.addEventListener('click', function () {
    const dialog = document.querySelector('#dlgCover')
    dialog.close()
})