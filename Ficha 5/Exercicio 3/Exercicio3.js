class Dice {
    constructor() {
        this.faces = 6
    }

    get faceValue() {
        return this._faceValue
    }

    set faceValue(value) {
        this._faceValue = value
    }
    /**
     * 
     * @param {string} faces represents the numbers of the dice faces
     */
    getQuantityFaces() {
        return this.faces
    }
    /**
     * generates a random number and saves it in the faceValue property 
     */
    roll() {
        this.faceValue = Math.floor((Math.random() * this.getQuantityFaces()) + 1)
    }
}

tableData()

function tableData() {
    const newDice = new Dice()

    const rolls = [0, 0, 0, 0, 0, 0]

    for (let i = 0; i < 100; i++) {
        newDice.roll()

        const face = newDice.faceValue

        rolls[face - 1]++

    }
    const table = document.querySelector('table')
    table.innerHTML += `<tr>
                            <td>${rolls[0]}</td>
                            <td>${rolls[1]}</td>
                            <td>${rolls[2]}</td>
                            <td>${rolls[3]}</td>
                            <td>${rolls[4]}</td>
                            <td>${rolls[5]}</td>    
                        </tr>`

    console.table(rolls)
}