//Crie uma função que receba um array de números e retorne apenas os números únicos (sem repetição).

function numerosUnicos(array) {
    const contador = {};
    const resultado = [];

    for (let num of array) {//- Inicia um laço for...of que percorre cada número do array.
        //- num representa o valor atual em cada iteração.

        contador[num] = (contador[num] || 0) + 1; //Atualiza a contagem de cada número:
        //- Se contador[num] já existe, soma 1.
        //- Se não existe (undefined), usa 0 como valor inicial
    }

    for (let num in contador) {//- Percorre todas as chaves do objeto contador.
        //- Cada num aqui é uma string representando um número do array original.

        if (contador[num] === 1) {//- Verifica se o número apareceu exatamente uma vez.
            //- Se sim, ele é considerado único.

            resultado.push(Number(num));//- Adiciona o número único ao array resultado.
            //- Usa Number(num) porque as chaves do objeto contador são strings, e queremos números.
        }
    }

    return resultado;
}

const array = [1, 2, 3, 4, 5, 1, 10, 2, 3];
const unicos = numerosUnicos(array);

console.log("Números únicos:", unicos);

//function numerosUnicos(array) {
//Define uma função chamada numerosUnicos que recebe um parâmetro array.
//Esse array deve conter números, e o objetivo é retornar apenas os que não se repetem.

//const contador = {};
//Cria um objeto vazio chamado contador.
//Esse objeto será usado para contar quantas vezes cada número aparece no array.

//const resultado = [];
//Cria um array vazio chamado resultado.
//Aqui serão armazenados os números únicos (aqueles que aparecem apenas uma vez).


