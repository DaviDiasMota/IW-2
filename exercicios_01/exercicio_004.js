/* Desenvolva um programa que receba dois números, calcule a soma deles. Os resultados deveram ser multiplicados por 10. Ao final mostrar todas as etapas realizadas. Realizar estas etapas em sequência de 3 repetições, usando a estrutura for*/

const prompt = require('prompt-sync')()
let valor1 = prompt("Digite aqui o primeiro valor:  ")
valor1 = parseFloat(valor1)
let valor2 = prompt("Digite aqui o segundo valor:  ")
valor2 = parseFloat(valor2)
let soma = valor1 + valor2
let mult = soma*10

for (j = 0; j != 3; j++){
    console.log(`\n O resultado da soma é ${soma}`)
    console.log(`\nO resultado da sua soma multiplicada por 10 é ${mult}`)
    console.log("-------------------------------")
}


