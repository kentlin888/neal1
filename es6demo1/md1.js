let a=5
let b=3
function add(a,b) {
    return a+b
}

function Car(name) {
    this.name = name
}

let car1 = new Car('toyota')
console.log(car1.name)

class BB{
    name=""
    age=""
    eat(){
        console.log(this.name)
    }
}

const aa =5
let bb=5




module.exports = {
    a,
    b,
    BB
}