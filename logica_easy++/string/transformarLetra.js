//Peça uma frase e transforme todas as letras maiúsculas em minúsculas e vice-versa.

const frase = "EsTOu esTUDando MUITO javascript";

const transformar = frase.replace(/[a-zA-Z]/g, letra =>
    letra === letra.toUpperCase()
    ? letra.toLowerCase()
    : letra.toUpperCase()
)
console.log(transformar);


// - Usa .replace() com uma expressão regular para encontrar todas as letras.
// - /[a-zA-Z]/g:
// - [a-zA-Z] → seleciona todas as letras, maiúsculas e minúsculas.
// - g → flag global, aplica a substituição em toda a string.
// - Para cada letra encontrada, executa a função letra => ....

// - Verifica se a letra está em maiúscula:
// - letra === letra.toUpperCase() → se for verdade, converte para minúscula.
// - Se for falso (ou seja, está em minúscula), converte para maiúscula.
// - Isso inverte o caso de cada letra individualmente.
