//Mostre todos os números de 100 a 1 (ordem decrescente).
let numero = [];

for (let i = 1; i <= 100; i++) {
    numero.push(i);  
};
console.log(numero.reverse());//mostra o numero de 100 a 1 em forma decrescente



//Questão 2 que é parecida
//Peça um número e mostre todos os números de 1 até ele.
let number =  69;
let armazenar = [];
 
for (let i = 1; i <= number; i++) {
    armazenar.push(i)
};

console.log(armazenar);



//Questão 3 que é parecida
//Peça um número e conte quantos números de 1 até ele são múltiplos de 3.

let numeracao = 100;
let guardar = [];

for (let i = 1; i <= numeracao; i++) {
    if (i % 3 === 0) {
        guardar.push(i);
    };   
};
console.log(guardar);




//Questão 4 que é parecida
//Peça um número e mostre a soma de todos os números pares até ele.

let escolha = 100;
let somaPares = 0;

for (let i = 0; i <= escolha; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }    
}

console.log(`\n ${somaPares}`);

//Questão 5 que é parecida
//Crie um contador que vai de 1 até 30, mas pule os múltiplos de 5.
let multiplos = 30;
let guardarNumeros = [];
let guardarNumerosMultiplos = [];

for (let i = 1; i <= multiplos; i++) {
    if (i % 5 !== 0) {//se não for multiplo
       guardarNumeros.push(i);
    };
    if(i % 5 === 0){
        guardarNumerosMultiplos.push(i);
    };
};
console.log(guardarNumeros);
console.log(guardarNumerosMultiplos);
