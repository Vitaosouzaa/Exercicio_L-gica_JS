//Crie uma função que conte quantas vezes cada letra do alfabeto aparece em uma string.

function contarQuantidadeDeLetra(frase) {
    const contagem = {};
    const letras = frase.toLowerCase().replace(/[^a-z]/g, ''); // remove tudo que não é letra

    for (let letra of letras) {
        contagem[letra] = (contagem[letra] || 0) + 1;
    }
    return contagem;
}

const fraseOriginal = "Almoçarei algo nutritivo, apenas: Alface, Almerão e Almondega.";
const numeroDeLetras = contarQuantidadeDeLetra(fraseOriginal);

console.log(numeroDeLetras);

//- .replace(/[^a-z]/g, '') → remove pontuação, espaços e acentos (se quiser tratar acentos, podemos melhorar isso).
//- for (let letra of letras) → percorre cada letra da frase.
//- contagem[letra] = (contagem[letra] || 0) + 1 → incrementa a contagem da letra no objeto.


//✅ O que é for...of?
// O for...of é uma estrutura de repetição em JavaScript que percorre diretamente os valores de um objeto iterável — como arrays, strings, mapas, etc.
// No seu caso, letras é uma string (ou seja, uma sequência de caracteres), e o for...of percorre cada caractere individualmente, de forma simples e legível.
// 🔍 Por que usar for...of aqui?
// - Mais direto: você acessa cada letra sem precisar de índice (i).
// - Mais limpo: evita letras[i], que é mais verboso.
// - Mais seguro: funciona com qualquer string, mesmo que tenha espaços, acentos ou símbolos (desde que tratados antes).
// - Mais expressivo: o código diz exatamente o que está fazendo — “para cada letra da frase”.

