const frase = "eu sou uma frase muito maior que a anterior";
const vogais = frase.split("").filter(letra => 'aeiou'.includes(letra))
console.log(vogais.length)//retorna a quantidade de vogais (21)
//split("") separa cada letra, detalhe que se colocar um espaço entre as aspas, ele separa as palavras como vogais e so vai contar o "a", então deve colocar o split sem o espaço
//filter filtra as vogais "aeiou"g
//includes("aeiou") verifica se a letra está entre as vogais
//se a primeira letra da frase estiver em maiuscula, precisa usar o toLowerCase, porque deixa tudo minuscula e a contagem sai correta, senão não conta a letra que estiver em maiuscula