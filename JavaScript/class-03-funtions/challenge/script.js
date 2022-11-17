// Faça um programa que execute o IMC de cada paciente 
// Os pacientes deverão está numa lista que contém o: 
// nome, height, weight
// Escreva na tela o nome do paciente

function calcIMC (patient) {
    let imc = patient.weight / (patient.height/100) ** 2
    return imc.toFixed(2)
}
const listPatients = [
    {
        name: "Maria",
        height: 169,
        weight: 60
    },
    {
        name: "Joao",
        height: 134,
        weight: 50
    }
]

for(const patient of listPatients) {
    document.write(`O IMC de ${patient.name} é ${calcIMC(patient)} <br>`)
}

// document.write(`O IMC de ${listPatients[0].name} é ${calcIMC(listPatients[0])} <br>`)
// document.write(`O IMC de ${listPatients[1].name} é ${calcIMC(listPatients[1])} <br>`)