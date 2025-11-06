//Crie uma função que receba dois arrays e retorne os elementos que existem em um e não no outro (diferença).

function comparacaoDeArray (arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}

const arrayUm = [0,1,2,3,4,5]
const arrayDois = [0,2,3,6,7,8]

console.log(comparacaoDeArray(arrayUm, arrayDois));
