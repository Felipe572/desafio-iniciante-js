// 7- Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const numberOne = prompt(`Digite um número: `)
const numberTwo = prompt(`Digite um outro número: `)

function mult(numberOne, numberTwo) {
    return numberOne * numberTwo
}

alert(mult(numberOne, numberTwo))
