//Crie uma função que receba uma matriz (array de arrays) e retorne a soma de todos os elementos.

//versão fixa
function somaMatriz(matriz) {
    const soma1 = (matriz[0][0]) + (matriz[0][1]) + (matriz[0][2]);
    const soma2 = (matriz[1][0]) + (matriz[1][1]) + (matriz[1][2]);
    const soma3 = (matriz[2][0]) + (matriz[2][1]) + (matriz[2][2]);

    return soma1 + soma2 + soma3
}

const matriz1 = [
    [2,4,6],
    [8,10,12],
    [40,42,44]
];

console.log(somaMatriz(matriz1));



//versão flexivel
function calculoMatriz(matriz) {
  let soma = 0;

  matriz.forEach(linha => {
    linha.forEach(valor => {
      soma += valor;
    });
  });

  return soma;
}

const matriz2 = [
  [2, 4, 6],
  [8, 10, 12],
  [40, 42, 44], 
  [60, 70, 80]
];

console.log(calculoMatriz(matriz2));

// - matriz.forEach(...): percorre cada linha da matriz.
// - linha.forEach(...): percorre cada número dentro da linha.
// - soma += valor: acumula todos os valores.


//versão com reduce
function somaMatriz2(matriz) {
  return matriz.flat().reduce((acc, val) => acc + val, 0);
}
// - flat() transforma a matriz em um único array.
// - reduce() soma todos os elementos.

const matriz3 = [
  [2, 4, 6],
  [8, 10, 12],
  [40, 42, 44], 
  [60, 100, 80]
];

console.log(somaMatriz2(matriz3));
