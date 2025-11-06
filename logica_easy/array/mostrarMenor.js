//Crie um array com 6 números e mostre o menor deles.

const array = [10, 11, 7, 71, 100, 2];
const menorNumero = Math.min(...array);
console.log(menorNumero);

//Math.min(...array) → Math.min() retorna o menor valor entre os números fornecidos.