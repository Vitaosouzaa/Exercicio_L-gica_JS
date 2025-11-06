//Crie uma função que receba uma string e remova todos os caracteres repetidos.

function removerCaracteresRepetidos(string) {
    return [...new Set(string)].join('')
}

console.log(removerCaracteresRepetidos('banana'));

//  Como funciona:
// - Set guarda apenas valores únicos.
// - [...] transforma o Set de volta em array.
// - .join('') junta os caracteres em uma nova string.




function removerRepetidas(str) {
  return str
    .split('')
    .filter((letra, i, arr) => arr.indexOf(letra) === i)
    .join('');
}

console.log(removerRepetidas('arroz'));

// .split('')
// - Divide a string em um array de caracteres.
// .filter((letra, i, arr) => arr.indexOf(letra) === i)
// - Filtra o array para manter apenas a primeira ocorrência de cada letra.
// - letra → o caractere atual.
// - i → índice atual.
// - arr.indexOf(letra) → retorna o índice da primeira vez que essa letra aparece no array.
// - Se i === arr.indexOf(letra), significa que é a primeira vez que essa letra aparece → então ela é mantida.
// - As repetições são ignoradas.
