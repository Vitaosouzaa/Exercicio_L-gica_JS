//Crie uma função que receba uma lista de números e retorne apenas os que aparecem uma única vez.

function aparecemUmaVez(arr) {
    return arr.filter(p => arr.indexOf(p) === arr.lastIndexOf(p))
}

const lista = [0,1,1,2,2,3]

console.log(aparecemUmaVez(lista));




//outra forma

const numeros = [1, 2, 3, 2, 4, 5, 1, 6];

const contagem = numeros.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

const unicos = numeros.filter(num => contagem[num] === 1);

console.log(unicos); // [3, 4, 5, 6]
