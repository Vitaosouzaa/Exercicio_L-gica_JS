//Peça uma palavra e conte quantas vezes a letra “e” aparece nela.

const palavra = "Interconectividade";
const letra = palavra.toLowerCase().split("");
const procurarLetra = letra.filter(letra => letra === "e");

console.log(procurarLetra.length)

//- .toLowerCase() garante que todas as letras estejam em minúsculo (caso tenha "E" maiúsculo).
//- .split("") transforma a string em um array de caracteres.
//- .filter(letra => letra === "e") seleciona só as letras "e".
//- .length conta quantas vezes isso aconteceu.
