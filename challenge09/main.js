// 9- Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const numberOne = prompt(`Digite um número: `)

if (numberOne % 2 == 0) {
    alert(`O número é Par`)
} else {
    alert(`O número é Impar`)
}
