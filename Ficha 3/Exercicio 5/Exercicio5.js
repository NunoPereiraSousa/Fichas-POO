document.querySelector('#year').max = new Date().getFullYear()

document.querySelector('#myForm').addEventListener('submit', function(event){
    feedTable()
    document.querySelector('#myForm').reset()
    event.preventDefault()
})

function feedTable(){
    const table = document.querySelector('table')

    const game = document.querySelector('#game').value
    const year = document.querySelector('#year').value
    const options = document.querySelector('#options').value
    const cover = document.querySelector('#cover').value

    table.innerHTML += `<tr>
                            <td>${game}</td>
                            <td>${year}</td>
                            <td>${options}</td>
                            <td><img src="${cover}"></img></td>  
                        </tr>`
}