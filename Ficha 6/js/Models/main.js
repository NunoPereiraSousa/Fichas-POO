import Band from './band.js'
import User from './user.js'

//Array to save all the objects of band
export let bands = []

if (localStorage.getItem('bands')) {
    bands = JSON.parse(localStorage.getItem('bands'))
} else {
    let band1 = new Band('Muse', 'Pop-Rock', 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2018/02/Muse-at-the-VO5-NME-Awards-2018-1-920x584.jpg', 'A great Band!','' )

    let band2 = new Band('RadioHead', 'Pop-Rock', 'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/04/RadioheadGettyImages-80530620-920x584.jpg', 'A great Band!', '')

    let band3 = new Band('Metallica', 'Rock', 'http://3.bp.blogspot.com/-1d7d3SfAtOA/Tp7hsx-kYBI/AAAAAAAAAG4/ALoqRLM5dfo/s1600/metalica.jpg', 'A great Band!', '')

    let band4 = new Band('James', 'Pop-Rock', 'https://i.postimg.cc/qMqQD9DC/2012-James-Band-Press181212-2.jpg', 'A great Band!', '')
    bands.push(band1, band2, band3, band4)
    bands = localStorage.setItem('bands', JSON.stringify(bands))
}

//Add Bands

export function addBand(txtName, sltGenre, txtDescription, txtPhoto, txtVideo) {
    let existBand = false
    for (const band of bands) {
        if (band.name === txtName) {
            existBand = true
            break
        }
    }

    if (!existBand) {
        bands.push(new Band(txtName, sltGenre, txtPhoto, txtDescription, txtVideo))
        localStorage.setItem('bands', JSON.stringify(bands))
        console.log(`Band ${txtName} is ready.`)
        location.href = '../../html/index.html'
    }
}

//Array to save all the objects of User
export let users = []

let user1 = new User('Nuno', '12345')
let user2 = new User('Maria', '54321')
let user3 = new User('Pedro', '15243')

users.push(user1, user2, user3)