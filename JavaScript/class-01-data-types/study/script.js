// Segundo o ECMAScript

// >>> Primitive Values (Strings, Number, Boolean)

// String

// let name = "Julia";
// let age = "29";
//Funções construtoras para converter tipo
// age = Number(age)

// console.log("names")
// console.log(typeof names)


// console.log(age);
// console.log(typeof age);

// NUMBER (Integer. Float, NaN, Infinity)


// let num1 = 8
// let num2 = "2"
// num2 = Number(num2)
// let soma = num1 + num2

// console.log(soma)
// console.log(typeof soma)

// >>> Variables Scope (Hoisting) <<<<<<



// {
// let num = 2
// const pi = 3.14
// console.log(num)

//     {
//         let num = 3
//         console.log (num)
//         //pi = 10;
//     }

//     console.log(num);
// }

//Boolean
// == - valor, === - tipos
//let n1 = "20", n2 = 20
// let n1 = 10, n2 = "20"
//let exp = "10" == 20
//console.log(n1 === n2)
//console.log(n1 == n2)
// console.log (n1 != n2)
// console.log(n1 !== n2)

// Template Strings (Interpolation)
let num1 = 10
let num2 = 20
let total = num1 + num2
// alert("olá")
console.log("A soma de " + num1  +  " e " + num2 + " é " + total);
console.log(`A soma de ${num1} e ${num2} é igual a ${total}`)

// Type Structutal (Object, Functions)

// let name = "Emanuel"
// let age = 29 
// let profission = "Web Developer"

// person = {
//     name: "Emanuel",
//     age: 29,
//     profission: "Web Developer"
// }
// console.log(typeof person)
// console.log(person)
// console.log(person.name)
//     console.log(`${person.name} tem ${person.age} anos e é ${person.profission}`)
// console.log(name)
// console.log(age)
// console.log(profission)


// Array (Vetor)

coutries = [
        ["Brasil", 5], 
        ["Alemanha", 4], 
        [ "Espanha", 1]
    ]
// console.log(coutries[2][0])

coutries = [
    {
        name: "Brasil", 
        champions: 5
    },

    {
        name: "Alemanha", 
        champions: 4
    },

    {
        name: "Espanha", 
        champions: 1
    }
]

let country = 2
console.log(`${coutries[country].name} tem ${coutries[country].champions} título(s) mundiais`)