//Crie uma função que receba um número e retorne a soma dos números primos menores que ele.

function ehPrimo(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i+= 2) {
        if (num % i === 0) return false
    }

    return true
}


function somaPrimos(num) {
    let soma = 0

    for (let i = 2; i < num; i++) {
        if (ehPrimo(i)) {
            soma += i
        }
    }

    return soma
}

console.log(somaPrimos(10));
