// let nome = String(prompt("Digite seu nome:"))
// let nota1 = Number(prompt("Digite sua nota:"))
// let nota2 = Number(prompt("Digite sua nota:"))

// let m1 = nota1 + nota2 / 2
// document.write(`${nome} <br>`)
// document.write(`${m1} <br>`)


// if (m1 >= 7) {
//     document.write("Aprovado")
// }else{
//     if(m1<7){

//         document.write("Reprovado")
//     }
// }

const name = prompt("Nome do aluno:")
const note1 = Number(prompt("Nota 1:"))
const note2 = Number(prompt("Nota 2:"))

function calc(note1, note2){
    return (note1 + note2) / 2
}

const avarege = calc(note1, note2)
if(avarege >= 7){
    situation = "Aprovado"
} else{
    situation = "Reprovado"
}
window.alert(`${name} tem média de ${avarege} e foi ${situation}`)