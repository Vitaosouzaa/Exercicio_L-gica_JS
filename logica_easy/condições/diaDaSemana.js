const sorteado = Math.floor(Math.random() * 7) + 1;

let dia;

if (sorteado === 1) dia = "Domingo";
if (sorteado === 2) dia = "Segunda-Feira";
if (sorteado === 3) dia = "Terça-Feira";
if (sorteado === 4) dia = "Quarta-Feira";
if (sorteado === 5) dia = "Quinta-Feira";
if (sorteado === 6) dia = "Sexta-Feira";
if (sorteado === 7) dia = "Sabado";

console.log(`Número sorteado: ${sorteado} - Dia da semana: ${dia}`);
