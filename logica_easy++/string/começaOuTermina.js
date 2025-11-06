//Peça uma palavra e diga se ela começa e termina com a mesma letra.

//forma 1
const palavra = "Abacate".toLowerCase();

if (palavra[0] === palavra[palavra.length - 1]) {
    console.log("A palavra começa e termina com a mesma letra.");
} else {
    console.log("A palavra NÃO começa e termina com a mesma letra.");
}


//forma 2
function mesmaLetra(palavra) {
  const formatada = palavra.toLowerCase();
  return formatada[0] === formatada[formatada.length - 1];
}

console.log(mesmaLetra("Abacate")); // false
console.log(mesmaLetra("Arara"));   // true