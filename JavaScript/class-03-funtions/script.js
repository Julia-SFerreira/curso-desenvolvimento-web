// Functions Statements

// Named

// function myTest() {
//     return
// }

function myTest(t) {
    console.log(t)
}

myTest("Belezas são coisas acesas por dentro, tristezas são belezas apagadas pelo sofrimento")

// function somar (n1, n2) {
//     // Operador chave
//     //let soma = n1 + n2
//     // return soma
//     return n1 + n2
// }
// console.log(somar(10, 50))

// Anonymous<<<<<<<<<

// let som = function (n1, n2) {
//     let soma = n1 + n2
//         return soma
//     //     return n1 + n2
// }

// Arrow<<<<<<

// let som = (n1, n2) => n1 + n2

// console.log(som(10, 20))

// Constructor <<<<

function Car(brandName, motorPower){
    this.brand = brandName
    this.mortor = motorPower
    this.walk = () => {
        console.log("Runnig...")
    }
}
const uno = new Car("Fiat", "1.4")
console.log(uno.brand)
console.log(uno.motor)
console.log(uno.walk())

    // Number()
    // String()
    // Car()