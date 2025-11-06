//Crie uma função que receba um número e retorne todos os seus divisores em um array.

function divisores(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            array.push(i);
        }
    }
    return array;  
}

console.log(divisores(1000));


