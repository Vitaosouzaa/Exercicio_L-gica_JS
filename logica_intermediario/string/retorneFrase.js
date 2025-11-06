//Crie uma função que receba uma frase e devolva todas as palavras com mais de 6 letras.

function receberFrase(frase){
    return frase.split(' ').filter(f => f.length > 6)
}

const frase = "função para retornar palavras com mais de 6 letras"

console.log(receberFrase(frase));
