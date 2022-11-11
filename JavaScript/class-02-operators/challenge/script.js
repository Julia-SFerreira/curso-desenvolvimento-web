const n1 = Number(prompt("Digite o primeiro número: "))
const n2 = Number(prompt("Digite o segundo número: "))
const sun = n1 + n2
const sub = n1 - n2
const multi = n1 * n2
const div = n1 / n2
const res = n1 % n2
const pot = n1 ** n2
const sqr = n2 ** (1/n1)

document.write(`A soma de ${n1} e ${n2} é: ${sun} <br>`);
document.write(`A subtração de ${n1} e ${n2} é: ${sub} <br>`);
document.write(`A multiplicação de ${n1} e ${n2} é: ${multi} <br>`);
document.write(`A divisão de ${n1} e ${n2} é: ${div.toFixed(2)} <br>`);
document.write(`O resto da divisão de ${n1} e ${n2} é: ${res} <br>`);
document.write(`A potência de ${n1} elevado a ${n2} é: ${pot} <br>`);
document.write(`A raiz ${n2} de ${n1} é: ${sqr.toFixed(2)} <br>`);