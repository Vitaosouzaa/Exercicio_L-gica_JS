//Crie uma função que receba um número e retorne a soma de todos os números de 1 até ele.

function somaTotalAteONum(num) {
    let somaTodosNumeros = 0;
    for (let i = 1; i <= num; i++) {
        somaTodosNumeros += i;
    }
    return somaTodosNumeros;
}

console.log(somaTotalAteONum(10));
console.log(somaTotalAteONum(200));
console.log(somaTotalAteONum(1000));
console.log(somaTotalAteONum(50000));



