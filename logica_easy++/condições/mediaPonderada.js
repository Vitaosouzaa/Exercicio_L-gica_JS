const pesoMat = 3;

const pesoPort = 2;

const pesoHist = 1;

function mediaPonderada(notaMat, notaPort, notaHist) {
    const mediaPonderada = ((notaMat * pesoMat) + (notaPort * pesoPort) + (notaHist * pesoHist)) / (pesoMat + pesoPort + pesoHist);
    return mediaPonderada;
}

console.log(`A media ponderada é: ${mediaPonderada(7, 8, 9).toFixed(2)}`);

