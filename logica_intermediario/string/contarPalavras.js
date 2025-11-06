//Crie uma função que conte quantas palavras têm a mesma letra inicial e final.

function contarInicialEFinal(string) {
    const palavras = string.split(' ');
    let contador = 0;

    for (const palavra of palavras) {
        const primeira = palavra[0]?.toLowerCase();
        const ultima = palavra[palavra.length - 1]?.toLowerCase();

        if (primeira === ultima ) {
            contador++
        }
    }
    return contador
}

const frase = "função para retornar palavras com mais de seis letras";

const fraseDois = "Retornar frase em ordem alfabetica";

console.log(contarInicialEFinal(frase));

//- ?.: evita erro se a palavra estiver vazia.
