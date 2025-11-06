//Crie uma função que receba um array e conte quantas vezes cada elemento aparece, retornando um objeto.

function arrayToObjeto(arr) {
    const obj = {};

    arr.forEach(elemento => {
        if (obj[elemento]) {
            obj[elemento]++;
        } else {
            obj[elemento] = 1;
        }
    });


    return obj
}

const array = [6, 10, 6, 10, 2, 2]

console.log(arrayToObjeto(array));
