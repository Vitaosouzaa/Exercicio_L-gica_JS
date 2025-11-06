//Crie um programa que simule um sistema de votação, com candidatos e votos, retornando o vencedor.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const candidatos = {
  A: 0,
  B: 0
};

function votacao () {
    rl.question('Vote no candidato A ou no candidato B (ou digite "fim" para encerrar): ', (voto) => {
        const escolha = voto.trim().toUpperCase();
        if (escolha === "A" || escolha === "B") {
            candidatos[escolha]++;
            console.log(`✅ Voto registrado para o candidato ${escolha}.`);
            votacao();
        }else if(escolha === "FIM"){
            encerrarVotacao();
        } else {
            console.log("⚠️ Voto inválido. Tente novamente.");
            votacao(); // repete a pergunta
        }
    })
}

function encerrarVotacao() {
    console.log("\n📊 Resultado da votação:");
    console.log(`Candidato A: ${candidatos.A} votos`);
    console.log(`Candidato B: ${candidatos.B} votos`);

    if (candidatos.A > candidatos.B) {
        console.log("🏆 Candidato A venceu a eleição!");
    } else if (candidatos.B > candidatos.A) {
        console.log("🏆 Candidato B venceu a eleição!");
    } else {
        console.log("🤝 Empate na eleição!");
    }

    rl.close();
}


votacao ();
