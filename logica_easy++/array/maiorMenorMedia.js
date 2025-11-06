//Peça ao usuário 5 números e coloque em um array. Mostre o maior, o menor e a média.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];
let contador = 0;

function pedirNumero() {
  rl.question(`Digite o número ${contador + 1} de 5: `, (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("❗ Por favor, digite um número válido.");
      pedirNumero(); // repete sem avançar o contador
      return;
    }

    array.push(numero);
    contador++;

    if (contador < 5) {
      pedirNumero();
    } else {
      const menor = Math.min(...array);
      const maior = Math.max(...array);
      const media = array.reduce((acc, val) => acc + val, 0) / array.length;

      console.log("\n📊 Resultados:");
      console.log("Menor número:", menor);
      console.log("Maior número:", maior);
      console.log("Média:", media.toFixed(2));

      rl.close();
    }
  });
}

pedirNumero();