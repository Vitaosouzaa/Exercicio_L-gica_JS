//Crie um programa que mostre a sequência de quadrados de 1 até N (ex: 1, 4, 9, 16...).

let sequenciaQuadrados = [];

for (let i = 1; i <= 100; i++) {
    const element = i * i;
    sequenciaQuadrados.push(element)
}

console.log(sequenciaQuadrados);
