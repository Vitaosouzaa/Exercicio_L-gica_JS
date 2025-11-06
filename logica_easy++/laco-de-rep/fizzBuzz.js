//Crie um programa que mostre todos os números de 1 até 100, mas substitua os múltiplos de 3 por “Fizz” e os múltiplos de 5 por “Buzz”.

const numero = 100

for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
  }
}


// //- Primeiro verifica se o número é múltiplo de ambos (3 e 5) — isso evita que "Fizz" ou "Buzz" sejam impressos sozinhos.
// - Depois verifica separadamente os múltiplos de 3 e 5.
// - Se não for múltiplo de nenhum, imprime o número normalmente.

    