//Peça o nome completo do usuário e mostre apenas o primeiro nome.

const nomeCompleto = "Vitor Caruso de Souza";

const primeiroNome = nomeCompleto.split(" ")[0];
console.log(primeiroNome);
//- .split(" ") divide a frase em partes, separando pelos espaços.
//- [0] pega a primeira parte, que normalmente é o primeiro nome.
