//Crie uma função que receba um array de objetos com {nome, salario} e calcule o salário médio, o maior e o menor salário.

const funcinarios = [
    {
        nome: "Maicon",
        salario: 10000
    },
    {
        nome: "Carlos",
        salario: 8000
    },
    {
        nome: "Maicon",
        salario: 12000
    },
]

function calculos(arr) {
    const salarios = arr.map(func => func.salario)

    const media = salarios.reduce((acc, val) => acc + val, 0) / salarios.length
    const maiorSalario = Math.max(... salarios)
    const menorSalario = Math.min(... salarios)

    console.log(`A média é: ${media}`);
    console.log(`O maior salario é: ${maiorSalario}`);
    console.log(`O menor salario é: ${menorSalario}`);
}

calculos(funcinarios)