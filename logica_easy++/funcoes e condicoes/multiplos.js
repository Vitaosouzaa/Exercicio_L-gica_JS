//Crie uma função que receba dois números e retorne true se eles forem múltiplos um do outro.

function saoMultiplos(num1, num2) {
    return num1 % num2 === 0 || num2 % num1 === 0
}

console.log(saoMultiplos(9, 3));
