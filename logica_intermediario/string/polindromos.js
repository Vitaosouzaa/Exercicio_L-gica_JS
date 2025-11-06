//Crie uma função que conte quantas palavras de uma frase são palíndromos.

function palavraPolindroma(frase) {
    const normal = frase.toLowerCase().split(' ');
    
    let contador = 0;

    for (const palavra of normal) {
        const invertida = palavra.split("").reverse().join("");
        if (palavra.length > 1 && palavra === invertida) {
            contador++
        }
    }
    return contador;
}

const frase = "O ovo não é um osso"

console.log(palavraPolindroma(frase));
 