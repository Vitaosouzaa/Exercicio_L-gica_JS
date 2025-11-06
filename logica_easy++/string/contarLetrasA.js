//Peça uma frase e conte quantas palavras começam com a letra "a".

const frase = "Almoçarei algo nutritivo, apenas: Alface, Almerão e Almondega.";
const letra = frase
    .toLowerCase()
    .replace(/[.,:;]/g, '')// remove pontuação que pode atrapalhar.
    .split(' ')// separa por espaço
    .filter(letra => letra.startsWith('a'));//pega só as que começam com "a".

console.log(letra.length);

