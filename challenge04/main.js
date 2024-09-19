// 1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")

// 2- Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
alert(`Vamos somar dois números?`)
let numberOne = prompt("Digite um número!")
let numberTwo = prompt("Digite o segundo número!")
let result = Number(numberOne) + Number(numberTwo)
alert(`O resultado da soma é: ${ result}`)

// 3- Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let number = prompt(`Me diga um número?`)
number = Number(number)

if (number != number) {
    alert(`Não é um número`)
} else {
    alert(`É um número`)
}

// 4- Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let letter = prompt(`Me diga uma palavra?`)

if (typeof letter === "string") {
    alert(`É uma string`)
} else {
    alert(`Não é uma string`)
}

console.log(typeof letter)