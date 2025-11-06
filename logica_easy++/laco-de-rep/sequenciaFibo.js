//Monte um programa que calcule a sequência de Fibonacci até o 10º termo.

let fibonacci = [0, 1];//- Começamos com os dois primeiros termos: 0 e 1.

for (let i = 2; i < 10; i++) {//- A partir do índice 2, cada termo é a soma dos dois anteriores.

    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];//formula
}

console.log("Sequência de Fibonacci até o 10º termo:");
console.log(fibonacci);