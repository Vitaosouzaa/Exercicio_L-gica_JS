//Crie uma função que receba dois arrays e retorne a união deles (sem valores duplicados).

function uniao(arr1, arr2) {
    return [... new Set([...arr1, ...arr2])]
}

const primeiroArray = [10, 11, 1, 2, 5];
const segundoArray = [10, 11, 3, 7, 9];

console.log(uniao(primeiroArray, segundoArray));

//- - Set é uma estrutura que elimina duplicatas automaticamente
//- O spread ... transforma o Set de volta em array.



//com duplicatas
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];

const uniaoArray = [...array1, ...array2];
// ou: const uniao = array1.concat(array2);

console.log(uniaoArray); // [1, 2, 3, 3, 4, 5]

// - Usa o operador spread (...) para espalhar os elementos de array1 e array2 dentro de um novo array.
// - Isso junta os dois arrays, mantendo os valores repetidos.






// O que é .concat()?
// - É um método de array que não altera os arrays originais, mas retorna um novo array contendo todos os elementos.
// - Ele anexa os elementos do segundo array ao final do primeiro
// .concat() é a mesma coisa que o spread(...)
