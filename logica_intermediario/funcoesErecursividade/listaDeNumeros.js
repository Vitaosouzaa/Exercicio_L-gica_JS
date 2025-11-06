//Crie uma função que receba uma lista de números e retorne apenas os números pares ordenados.

function paresOrdenados (lista) {
    const pares = lista.filter(num => num % 2 === 0)
    //- filter(num => num % 2 === 0) → seleciona apenas os números pares.
    return pares.sort((a, b) => a - b);
    //ordena os pares em ordem crescente.
}

const array = [0, 3, 2, 4, 8, 6, 5]

console.log(paresOrdenados(array));
