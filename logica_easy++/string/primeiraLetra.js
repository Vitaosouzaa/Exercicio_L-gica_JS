//Crie uma função que receba uma frase e retorne a primeira letra de cada palavra.

function pegarPrimeiraLetra(frase) {
    const pegar = frase.toLowerCase().split(' ');
    return frase.length[0];
}

console.log(pegarPrimeiraLetra("Estou estudando muito javascript"));

