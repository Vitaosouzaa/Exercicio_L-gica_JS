//Some todos os números de um array e mostre o resultado.

const number = [1,28,33,4,57,61,7,8,91,50];

const somaTotalDoArray = number.reduce((prev, curr) => {
    return prev + curr;
}, 0);

console.log(somaTotalDoArray);

// .reduce() → percorre o array, acumulando um valor (nesse caso, a soma).
//- prev → valor acumulado até o momento (inicia em 0, que é o segundo parâmetro do reduce).
//- curr → valor atual do array que está sendo processado.
//- O resultado final é a soma de todos os números do array.