//Peça um texto e mostre apenas as palavras com mais de 4 letras.

const frase = "Almoçarei algo nutritivo, apenas: Alface, Almerão e Almondega.";
const fraseFormatada = frase.toLowerCase().replace(/[.,:;]/g, '').split(' ');
const fraseMostrarPalavras = fraseFormatada.filter(palavras => palavras.length > 4);

console.log(fraseMostrarPalavras);

//- .filter(palavra => palavra.length > 4) → pega só as palavras com mais de 4 letras.
//O que você quer é verificar se o comprimento da palavra (palavra.length) é maior que 4.
