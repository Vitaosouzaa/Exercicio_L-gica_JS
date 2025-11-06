//Crie uma função que receba um array e retorne o array invertido sem usar .reverse().

function arrayInvertido(arr1) {
    const invertido = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        invertido.push(arr1[i])
    }
    return invertido
}

const inverter = [10, 11, 12, 50, 60];

console.log(arrayInvertido(inverter));

//- arr1.length - 1 → começa do último índice.
//- i-- → percorre o array de trás pra frente.
