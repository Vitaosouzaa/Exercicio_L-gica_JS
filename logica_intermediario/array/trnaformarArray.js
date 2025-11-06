//Crie uma função que receba um array e retorne outro com os valores sem falsy values (false, 0, "", null, undefined, NaN).

function removerFalsy (arr1) {
    return arr1.filter(Boolean);
};

const array = [1, "", null, 10, undefined, NaN, 8, false]

console.log(removerFalsy(array));

//- filter() percorre cada item do array.

//- Boolean(item) transforma o item em true ou false.
//- Se for true, o item fica no array.
// - Se for false, o item é removido.
