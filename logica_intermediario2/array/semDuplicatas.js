// Crie uma função que receba um array de números e retorne um novo array sem números duplicados e ordenado.

function semDuplicatas(arr) {
    const tratarDuplicatas = [... new Set([...arr])];
    const ordenado = tratarDuplicatas.sort((a, b)=> a - b);

    return ordenado
}

const array = [10,11,10,12,14,11,13];

console.log(semDuplicatas(array));
