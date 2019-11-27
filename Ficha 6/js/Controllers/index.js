import {
    bands
} from '../Models/main.js'

const btnFilter = document.querySelector('#btnFilter')
btnFilter.addEventListener('click', function (event) {
    const txtName = document.querySelector('#txtName').value
    const sltGenre = document.querySelector('#stlGenre').value

    renderCatalog(sltGenre, txtName)
    event.preventDefault()

})
renderCatalog()

/**
 * Function that shows the render the catalog
 * @param {string} filterGenre 
 * @param {string} filterName 
 */
function renderCatalog(sltGenre = "", txtName = "") {
    
    const myCatalog = document.querySelector('#myCatalog')

    let result = ''
    let i = 0
    for (const band of bands) {

        if ((sltGenre !== '' && sltGenre !== band.genre) ||
            (txtName !== '' && !band.name.startsWith(txtName))
        ) {
            continue
        }
        if (i % 3 === 0) {
            result += `<div class="row">`
        }
        result += `<div class="col-sm-4">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${band.image}">
                        <div class="card-body">
                            <h5 class="card-title">${band.name}</h5>
                            <p class="card-text">${band.genre}</p>
                            <a href="#" class="btn btn-success">More</a>
                            <a href="#" class="btn btn-danger">Remove</a>
                        </div>
                    </div>
                </div>`
        i++
        if (i % 3 === 0) {
            result += `</div>`
        }

        
    }
    myCatalog.innerHTML = result
}