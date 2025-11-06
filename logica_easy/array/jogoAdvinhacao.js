const readline = require("readline");// Importa o módulo readline do Node.js, que permite ler entradas do usuário no terminal (como se fosse um prompt interativo).


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
    // Cria uma interface de leitura e escrita:
    //input: process.stdin → recebe o que o usuário digita.
    //output: process.stdout → mostra mensagens no terminal.

});

const numeroAleatório = Math.floor(Math.random() * 11);//Gera um numero aleatório entre 0 e 10
let tentativas = 3

function perguntarNumero() {
    rl.question('Tente advinhar um numero entre 0 e 10: ', (chute) => {
        const numero = parseInt(chute)//transforma em um numero inteiro
        if (isNaN(numero)) {
            console.log("Digite um Numero Válido")
            return perguntarNumero();
        }

        if (numero < 0 || numero > 10) {
            console.log("🚫 O número deve estar entre 0 e 10.");
            return perguntarNumero();
        }


        if (numero === numeroAleatório){
            console.log("Parabéns! Você adivinhou o número!");
            rl.close();
        }else {
            tentativas--;

            if (tentativas > 0) {
                console.log("❌ Que pena, tente novamente!");
                perguntarNumero();
            } else {
                console.log(`😢 Você perdeu! O número era ${numeroAleatório}.`);
                rl.close();
            }
        }
    
    })
}

perguntarNumero();