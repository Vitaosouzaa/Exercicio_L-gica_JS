//Faça um programa que simule um dado de 6 lados sendo jogado 10 vezes e mostre o resultado de cada jogada.

function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

for (let i = 1; i <= 10; i++) {
    const jogada = i
    console.log(`🎲 Resultado da ${jogada} jogada: o valor do dado é ${rolarDado()}🎲`);
}

//- Math.random() gera um número entre 0 e 1.
//- Math.random() * 6 Multiplicamos por 6 para obter um número entre 0 e 5.999...
//- Math.floor(...) arredonda para baixo, dando um número entre 0 e 5.
//- Somamos 1 para obter um valor entre 1 e 6, como um dado real.


