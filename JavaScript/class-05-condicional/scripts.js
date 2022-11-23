// let week = 1 // 1 - 7

// switch (week) {
//     case 1:
//         day = "Domingo"
//         break;
//     case 2: 
//         day = "Segunda" 
//         break;   
//     case 3: 
//         day = "Terça" 
//         break;   
//     case 4: 
//         day = "Quarta" 
//         break;   
//     case 5: 
//         day = "Quinta" 
//         break;   
//     case 6: 
//         day = "Sexta" 
//         break;   
//     case 7: 
//         day = "Sábado" 
//         break;   
//     default:
//         console.log("Dia não encontrado")
//         break;
// }
// console.log(day)

let myFuntion = () => "Running"
try{
    throw new `Número fora do intervalo de 1 a 7`
    myFuntion ()
} catch (error) {
    console.log(error);

}
document.write("Rodando aplicação...")