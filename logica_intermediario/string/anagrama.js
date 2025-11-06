//Crie uma função que receba duas strings e verifique se são anagramas.

function anagrama (stringUm, stringDois) {
  const normalizar = str =>
    str
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^a-z0-9]/g, "") // remove pontuação e espaços
      .split('')
      .sort()
      .join('');

  return normalizar(stringUm) === normalizar(stringDois);

}

console.log(anagrama("amor", "roma"));       
console.log(anagrama("pedra", "padre"));     
console.log(anagrama("Vitor", "torvi"));     
console.log(anagrama("banana", "abacate"));  

// function anagrama(stringUm, stringDois) {
// - Define a função chamada anagrama que recebe duas strings como parâmetros: stringUm e stringDois.

// const normalizar = str =>
// - Cria uma função auxiliar chamada normalizar que prepara a string para comparação.
// - Essa função será usada para limpar e organizar as letras de cada string.

// str.toLowerCase()
// - Converte todos os caracteres da string para letras minúsculas.
// - Isso evita que "Roma" e "amor" sejam considerados diferentes por causa de maiúsculas.

// .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
// - Remove acentos das letras.
// - "á" vira "a", "é" vira "e", etc.
// - normalize("NFD") separa os acentos dos caracteres.
// - O replace(...) elimina os acentos com base em um intervalo Unicode.

// .replace(/[^a-z0-9]/g, "")
// - Remove tudo que não for letra ou número.
// - Isso inclui espaços, pontuação, símbolos, etc.
// - Garante que só as letras sejam comparadas.

// .split('')
// - Divide a string em um array de caracteres.
// - Exemplo: "roma" vira ["r", "o", "m", "a"]

// .sort()
// - - Ordena os caracteres em ordem alfabética.
// - Exemplo: ["r", "o", "m", "a"] vira ["a", "m", "o", "r"]

// .join('')- Junta os caracteres novamente em uma string.
// - Exemplo: ["a", "m", "o", "r"] vira "amor"

// return normalizar(stringUm) === normalizar(stringDois);
// - Compara as duas strings normalizadas e ordenadas.
// - Se forem iguais, significa que são anagramas.


