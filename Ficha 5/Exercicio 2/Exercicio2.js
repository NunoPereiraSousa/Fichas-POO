class Car{
    constructor (brand, plate, color, deposit, fuel){
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuel = fuel
    }

    changeColor(color){
        return this.color = color
    }

    updateFuel(moreFuel){
        return this.deposit += moreFuel
    }

    getDistance(distance){
        return this.deposit -= (5 * distance) / 100
    }

    //Exercise f i
    static carsNumber(brand){
        let sum = 0
        for (const car of cars) {
            if (car.brand === brand) {
                sum++
            }
        }
        return sum
    }

    //Exercise f i
    static fuelType(fuel){
        let increment = 0
        for (const car of cars) {
            if (car.fuel === fuel) {
                increment += car.deposit
            }
        }
        return increment
    }
}

let ford = new Car('Ford', '91-GH-15', 'green', 40, 'Diesel')
let opel = new Car('Open', '23-AB-23', 'white', 50, 'Gasoline')
let nissan = new Car('Nissan', '12-CX-45', 'black', 20, 'Diesel')

console.log(ford.changeColor('blue'));
console.log(ford.updateFuel(40));
console.log(ford.getDistance(80));

const cars = []
//Exercise e.
cars.push(ford, opel, nissan)
console.table(cars)
//Exercise f. i
console.log(Car.carsNumber('Ford'));
//exercise f. ii
console.log(Car.fuelType('Diesel'))