//Crie um array com 10 números aleatórios e ordene em ordem crescente sem usar .sort().

const arrayUM = [0, 1, 12, 9, 7, 11, 20, 21, 19, 50];

// Bubble Sort manual
for (let i = 0; i < arrayUM.length; i++) {
    for (let j = 0; j < arrayUM.length - 1; j++) {
        //- Inicia o laço interno, que percorre o array comparando pares de elementos.
        //- Vai até array.length - 1 para evitar acessar um índice fora do array (j + 1).


        if (arrayUM[j] > arrayUM[j + 1]) {
        //- Verifica se o número atual (array[j]) é maior que o próximo (array[j + 1]).
        //- Se for, significa que estão fora de ordem e precisam ser trocados.

            //troca os valores
            let temp = arrayUM[j];//- temp guarda temporariamente o valor de array[j].
            arrayUM[j] = arrayUM[j + 1];//- array[j] recebe o valor de array[j + 1]
            arrayUM[j + 1] = temp;//- array[j + 1] recebe o valor guardado em temp.
            //- Isso garante que os dois valores troquem de lugar corretamente.
        }
    }
}

console.log("Array ordenado:", arrayUM);



const array = [0, 1, 12, 9, 7, 11, 20, 21, 19, 50];

const ordemCrescente = array.sort((a, b) => a-b);
//- .sort((a, b) => a - b) → compara os números corretamente:
// - Se a - b for negativo, a vem antes de b
// - Se for positivo, b vem antes de a

console.log(ordemCrescente);
