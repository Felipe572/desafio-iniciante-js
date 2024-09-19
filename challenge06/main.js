// 6- Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const numberOne = prompt(`Digite um número: `)
const numberTwo = prompt(`Digite um outro número: `)

function sub(numberOne, numberTwo) {
    return numberOne - numberTwo
}

alert(sub(numberOne, numberTwo))
