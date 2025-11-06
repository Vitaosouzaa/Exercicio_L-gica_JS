const readline = require("readline");// Importa o módulo readline do Node.js, que permite ler entradas do usuário no terminal (como se fosse um prompt interativo).


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
    // Cria uma interface de leitura e escrita:
    //input: process.stdin → recebe o que o usuário digita.
    //output: process.stdout → mostra mensagens no terminal.

});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;//Gera um numero aleatório

function perguntarNumero() {
    //🔹 Exibe uma pergunta no terminal e espera o usuário digitar um valor.
    //O valor digitado é armazenado na variável chute.
    rl.question("Tente adivinhar o número entre 1 e 100: ", (chute) => {

        const numero = parseInt(chute)//transforma em um numero inteiro

        if (isNaN(numero)) {
            console.log("Digite um Numero Válido")
            perguntarNumero();
        }else if(numero < numeroAleatorio){
            console.log("Numero muito baixo");
            perguntarNumero();
        }else if(numero < numeroAleatorio){
            console.log("Numero muito Alto");
            perguntarNumero();
        }else{
            console.log("Voce acertou o numero");
            rl.close();
            // Se o número estiver correto, exibe uma mensagem de sucesso e fecha a interface com rl.close() para encerrar o programa.
        }
    });
}

perguntarNumero();//🔹 Chama a função pela primeira vez para iniciar o jogo