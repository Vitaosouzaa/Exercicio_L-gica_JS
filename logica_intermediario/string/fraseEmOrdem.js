//Crie uma função que receba uma string e devolva a mesma string com as palavras em ordem alfabética.

function ordemAlfabetica(string) {
    return string.split(' ').map(p => p.toLowerCase()).sort()
}

const frase = "Retornar frase em ordem alfabetica"

console.log(ordemAlfabetica(frase));
