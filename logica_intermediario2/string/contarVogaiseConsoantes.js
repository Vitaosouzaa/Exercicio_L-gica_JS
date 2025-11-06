//Crie uma função que conte quantas vogais e consoantes existem em uma frase.

function contarVogaisConsoantes(frase) {
  const fraseMinuscula = frase.toLowerCase();
  const vogais = fraseMinuscula
    .split("")
    .filter((letra) => "aeiou".includes(letra));
  const contarVogais = vogais.length;

  const consoantes = frase
    .split("")
    .filter((letra) => "bcdfghjklmnpqrstvwzyx".includes(letra));
  const contarConsoantes = consoantes.length;

  return `A quantidade de vogais é ${contarVogais} e a quantidade de consoantes é ${contarConsoantes}`;
}

const sentenca = "O vento sussurrou segredos entre as folhas";

console.log(contarVogaisConsoantes(sentenca));
//split("") separa cada letra
//filter filtra as vogais "aeiou" e consoantes "bcdfghjklmnpqrstvwzyx"
//includes("aeiou") verifica se a letra está entre as vogais
//includes("bcdfghjklmnpqrstvwzyx") verifica se a letra está entre as consoantes
//se a primeira letra da frase estiver em maiuscula, precisa usar o toLowerCase, porque deixa tudo minuscula e a contagem sai correta, senão não conta a letra que estiver em maiuscula
//retorna a quantidade de vogais e consoantes na frase
