/* Desenvolva um código que recba dois números, calcule a soma deles. O resultado deverá ser multiplicado por 10. Ao final mostrar todas as etapas realizadas. */
const prompt = require("prompt-sync")()
var valor1 = prompt("Digite o primeiro valor aqui:  ")
valor1 = parseFloat(valor1)

var valor2 = prompt("Digite o segundo valor aqui:  ")
valor2 = parseFloat(valor2)
var resultado_soma = valor1 + valor2

var resultado_mult = resultado_soma * 10

console.log("O resultado da soma é ", resultado_soma)

console.log("O resultado da soma dos núemros multiplicada por 10 é ", resultado_mult)
