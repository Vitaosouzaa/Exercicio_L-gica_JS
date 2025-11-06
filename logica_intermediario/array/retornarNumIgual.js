//Crie uma função que receba dois arrays e retorne um novo com a interseção (elementos comuns).

function numerosIguais(arrayUm, arrayDois) {
    return arrayUm.filter(valor => arrayDois.includes(valor));
}

const primeiroArray = [10, 11, 1, 2, 5];
const segundoArray = [10, 11, 3, 7, 9];

console.log(numerosIguais(primeiroArray, segundoArray));

//- arrayUm.filter(...) → percorre cada elemento de arrayUm.
//- arrayDois.includes(valor) → verifica se esse valor também existe em arrayDois
