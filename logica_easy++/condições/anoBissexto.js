//Crie uma função que receba um ano e diga se ele é bissexto.

function verificarAno(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }
}

verificarAno(2020);
verificarAno(2018);
verificarAno(2010);
verificarAno(2024);


