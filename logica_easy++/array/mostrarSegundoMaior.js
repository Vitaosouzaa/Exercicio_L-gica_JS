//Crie um array com 10 números e mostre o segundo maior número

//Exemplo com o .reverse(do maior pro menor);
const number = [1,28,33,4,57,61,7,8,91,50];
const maiorParaOMenor = number.sort((a, b) => a - b).reverse();
console.log(maiorParaOMenor);

console.log(`O segundo maior numero do array é ${maiorParaOMenor[1]}`);


//Exemplo sem o .reverse(do maior pro menor);
const arrayNumber = [1, 28, 33, 4, 57, 61, 7, 8, 91, 50];

const ordenado = arrayNumber.sort((a, b) => b - a); // ordem decrescente
const segundoMaior = ordenado[1];

console.log("Array ordenado:", ordenado);
console.log(`O segundo maior número é ${segundoMaior}`);