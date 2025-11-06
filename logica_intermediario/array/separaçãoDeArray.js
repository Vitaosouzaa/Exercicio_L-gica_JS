// Crie uma função que divida um array em subarrays de tamanho N.

function subArray(arr, tamanho) {
    const resultado = [];

    for (let i = 0; i < arr.length; i+= tamanho) {
        resultado.push(arr.slice(i, i+tamanho))
    }
    return resultado
}

const array = [1,2,3,4,5,6,7,8,9,10];

console.log(subArray(array, 2));

//O método .slice() em JavaScript é usado para extrair uma parte de um array (ou string) e retornar como um novo array, sem modificar o original
// - arr.slice(i, i + tamanho) pega um pedaço do array:
// - Começa na posição i.
// - Vai até i + tamanho (sem incluir).

