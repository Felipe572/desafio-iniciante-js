// 10- Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const numberOne = prompt(`Digite um número: `)

if (numberOne % 2 == 1) {
    alert(`O número é Impar`)
} else {
    alert(`O número é Par`)
}
