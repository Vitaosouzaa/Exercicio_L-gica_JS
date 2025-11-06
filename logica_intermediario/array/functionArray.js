//Crie uma função que receba um array e retorne um novo array sem valores repetidos


function removerDuplicatas(array) {
  return [...new Set(array)];
}

const numeros = [10, 20, 10, 30, 20, 40];
const semRepetidos = removerDuplicatas(numeros);

console.log(semRepetidos); // [10, 20, 30, 40]
