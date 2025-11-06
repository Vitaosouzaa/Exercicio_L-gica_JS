//Crie uma função que receba um array de números e retorne a mediana.

const array = [20, 12, 10, 11, 21];
array.sort((a, b) => a - b);
const meio = Math.floor(array.length / 2);
const mediana = array[meio];

console.log(mediana);

//numeros.sort((a, b) => a - b);
// - Ordena o array em ordem crescente.
// - O .sort() sozinho ordenaria como strings, o que daria resultados errados com números.
// - A função (a, b) => a - b garante que a ordenação seja numérica.
// - Resultado após essa linha: [2, 4, 6, 8, 10]

// const meio = Math.floor(numeros.length / 2);
// - Calcula o índice central do array.
// - numeros.length é 5, então 5 / 2 = 2.5
// - Math.floor(2.5) arredonda para baixo → 2
// - Isso significa que o número do meio está na posição 2 (lembrando que os índices começam em 0)
