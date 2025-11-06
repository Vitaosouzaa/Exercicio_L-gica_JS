 // Crie uma função que receba uma string e retorne todas as substrings possíveis de tamanho 3.

function retornarSubstring(string) {
    const resultado = [];

    for (let i = 2; i <= string.length - 3; i++) {
        resultado.push(string.slice(i, i + 3))
    }

    return resultado
}

const frase = "Retornar frase em ordem alfabetica";

console.log(retornarSubstring(frase));
