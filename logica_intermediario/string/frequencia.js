//Crie uma função que receba uma string e retorne a frequência de cada letra em um objeto.

function frequenciaDeCadaLetra(palavra) {
    const contarLetra = palavra.split('').filter(letra => 'abcdefghijklmnopqrstuvwxyz'.includes(letra)) 
    const frequencia = {};

    for (const letra of contarLetra) {
        frequencia[letra] = (frequencia[letra] || 0) + 1
    }

    return frequencia
}

console.log(frequenciaDeCadaLetra("arroz"));
