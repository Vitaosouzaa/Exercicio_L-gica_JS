//Crie uma função que inverta a ordem das palavras de uma frase (ex: "Eu gosto de JS" → "JS de gosto Eu").

function inverterFrase(frase) {
    return frase.split(' ').reverse().join(' ');  
}

const fraseOriginal = "Almoçarei algo nutritivo, apenas: Alface, Almerão e Almondega.";
const fraseInvertida = inverterFrase(fraseOriginal);

console.log(fraseInvertida);

