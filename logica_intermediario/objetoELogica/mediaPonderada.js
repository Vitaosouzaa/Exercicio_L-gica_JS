// Crie uma função que receba um objeto representando notas de um aluno e calcule a média ponderada.

const aluno = {
    pesoNotaUm: 3,
    pesoNotaDois: 3,
    pesoNotatres: 1,

    mediaPonderada(notaMat, notaPort, notaHist){
        const mediaP = ((notaMat * this.pesoNotaUm) + (notaPort * this.pesoNotaDois) + (notaHist * this.pesoNotatres)) / (this.pesoNotaUm + this.pesoNotaDois + this.pesoNotatres)
        return mediaP
    }
}

console.log(aluno.mediaPonderada(10, 2, 5));
