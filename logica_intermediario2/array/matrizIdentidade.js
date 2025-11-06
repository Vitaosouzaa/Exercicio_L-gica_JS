//Crie uma função que gere uma matriz identidade de tamanho N.

function matrizIdentidade(n){
    const matriz = [];

    for (let i = 0; i < n; i++) {
        matriz[i] = []

        for (let j = 0; j < n; j++) {
            matriz[i][j] = i === j ? 1 : 0;
        }
    }

    return matriz
}


console.log(matrizIdentidade(4));
