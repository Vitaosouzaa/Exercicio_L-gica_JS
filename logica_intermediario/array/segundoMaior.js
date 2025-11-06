//Crie uma função que receba um array de números e retorne o segundo maior número.

function mostrarSegundoMaior(lista) {
    const segundoMaior = lista.sort((a, b) => b - a);
    return segundoMaior[1]
}

const array = [100, 1, 30, 5, 300, 80]

console.log(mostrarSegundoMaior(array));
