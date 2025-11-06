//Crie uma função que receba uma lista de números e retorne a mediana.

function mediana(arr) {
    const ordenar = arr.slice().sort((a, b) => a - b);
    const meio = Math.floor(ordenar.length / 2);//- Calcula o índice central do array.

    if(ordenar.length % 2 === 0){
        return (ordenar[meio - 1] + ordenar[meio]) / 2;
        //- Se for par: pega os dois valores centrais e retorna a média deles.
    }else{
        return ordenar[meio]
        //- Se for ímpar: retorna o valor que está exatamente no meio.
    }
};

const array = [10,51,35,42,50,2,11];

const arrayDois = [10,51,35,42,50,2]

console.log(mediana(array));
console.log(mediana(arrayDois));

// - arr.slice() cria uma cópia do array original para não alterá-lo.
// - .sort((a, b) => a - b) ordena os números em ordem crescente.
// - Math.floor() arredonda para baixo caso o tamanho seja ímpar.
