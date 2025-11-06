//Crie uma função que receba uma string e retorne a palavra mais longa.

function palavaMaisLonga(frase){
    const palavras = frase.split(' ')
    let maisLonga = '';

    for (const palavra of palavras) {
        if (palavra.length > maisLonga.length) {
            maisLonga = palavra
        }
    }
    return maisLonga;
}

console.log(palavaMaisLonga('O ovo caiu'));

//O for...of é uma estrutura de repetição do JavaScript que serve para percorrer os valores de objetos iteráveis, como arrays, strings, Maps, Sets e muito mais. Ele é simples, direto e muito útil quando você quer acessar os valores, e não os índices ou chaves.
