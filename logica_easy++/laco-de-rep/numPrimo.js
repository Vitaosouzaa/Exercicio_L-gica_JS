
function isPrimo(n) {
    if (n < 2) return false; //Números menores que 2 não são primos (por definição, o menor primo é 2)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; //- Se n for divisível por i, então não é primo.
    }
    return true;
}

for (let i = 100; i >= 1; i--) { //Mostre todos os números primos de 1 a 100.
    if (isPrimo(i)) {
        console.log(i);
    }
}

//Math.sqrt(n) é uma função do JavaScript que retorna a raiz quadrada de um número n.
// for (let i = 2; i <= Math.sqrt(n); i++)
// Aqui começa a verificação: testamos se n é divisível por algum número entre 2 e a raiz quadrada de n.
// Por quê até a raiz quadrada? Porque se n tiver um divisor maior que sua raiz, ele já teria um divisor menor também — é uma otimização.
