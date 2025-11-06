//Crie uma função que receba uma base e um expoente e calcule a potência usando apenas multiplicações (sem **).

function potencia(base, expoente) {
    let resultado = 1;

    for (let i = 0; i < expoente; i++) {
        resultado *= base        
    }

    return resultado
}

console.log(potencia(5, 10));
