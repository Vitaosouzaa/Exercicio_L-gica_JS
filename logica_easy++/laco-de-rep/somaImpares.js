//Faça um programa que mostre a soma dos números ímpares de 1 a 100.

let numeros = 100;
let somaImpares = 0;

for (let i = 0; i <= numeros; i++) {
    if (i % 2 !== 0) {
        somaImpares += i;   
    }
}

 console.log(somaImpares);