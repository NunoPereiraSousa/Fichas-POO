/**
 * Classe que modula um retângulo
 */

class Rectangle {
    constructor(height, width){
        this.height = height
        this.width = width
        this.color = '#FFFFFF'
    }

    get width(){
        return this._width
    }

    set width(value){
        this._width = value
    }

    get height(){
        return this._height
    }
    
    set height(value){
        this._height = value
    }

    get color(){
        return this._color
    }

    set color(value){
        this._color = value
    }

    /**
     * 
     @returns a área do retângulo
     */
    getArea(){
        return this._width * this._height
    }

    /**
     * @returns o perimetro do retângulo
     */
    getPerimeter(){
        return 2 * this._width + 2 * this._height
    }
}

let newRectangle = new Rectangle(10, 5)
console.log(newRectangle.width);
console.log(newRectangle.height);
console.log(newRectangle.color);
console.log(newRectangle.getArea());
console.log(newRectangle.getPerimeter());