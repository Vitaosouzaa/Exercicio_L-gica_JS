//Crie uma função que receba um número e retorne se ele é positivo, negativo ou zero.

function positivoOuNegativo (num) {
    if (num > 0) {
        return "Positvo"
    } else if (num < 0) {
        return "Negativo"
    }else{
        return "É zero"
    }
}

console.log(`O numero 10 é: ${positivoOuNegativo(10)}`);
console.log(`O numero -10 é: ${positivoOuNegativo(-10)}`);
console.log(`O numero 0 é: ${positivoOuNegativo(0)}`);
console.log(`O numero 100 é: ${positivoOuNegativo(100)}`);

