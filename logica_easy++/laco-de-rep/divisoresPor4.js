//Mostre todos os números de 1 até 50 que são divisíveis por 4.

let numero = [];

for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 ) {
         numero.push(i)
    }
}

console.log(numero);
