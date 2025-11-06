//Peça uma palavra e diga se ela possui pelo menos uma vogal.

//exemplo 1
const palavra =  "arroz"

const tratamento = palavra.split('').filter(letra => 'aeiou'.includes(letra));

if (tratamento.length > 0) {
   console.log("A palavra possui pelo menos uma vogal.");
} else {
   console.log("A palavra NÃO possui vogais.");
}


//exemplo 2
function funcaoPalavra(algo) {
    const tratamento = algo.split('').filter(letra => 'aeiou'.includes(letra));
    if (tratamento.length > 0) {
        console.log("A palavra possui pelo menos uma vogal.");
    } else {
        console.log("A palavra NÃO possui vogais.");
    }
}

funcaoPalavra('alface');