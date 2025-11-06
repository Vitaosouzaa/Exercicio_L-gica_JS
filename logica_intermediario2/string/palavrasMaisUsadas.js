// Crie uma função que receba um texto e retorne as 5 palavras mais usadas.

function palavraMaisUsada(texto) {
  const contagem = {};

  const palavras = texto
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/);

  for (const palavra of palavras) {
    contagem[palavra] = (contagem[palavra] || 0) + 1;
  }

  const top5 = Object.entries(contagem)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return top5;
}

const texto =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

console.log(palavraMaisUsada(texto));
