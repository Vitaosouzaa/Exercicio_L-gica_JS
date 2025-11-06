//Crie um array com 5 números e calcule a média.
const array = [10, 11, 71, 100, 2];

const mediaArray = array.reduce((prev, curr) => prev + curr, 0) / array.length;

console.log(mediaArray);
