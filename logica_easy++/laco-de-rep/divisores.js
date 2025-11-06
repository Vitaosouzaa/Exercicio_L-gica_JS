//Peça um número N e mostre os divisores desse número.

const numero = 100;

for (let i = 1; i <= numero; i++) {
    const divisores = i;
    if (numero % divisores === 0) {
        console.log(divisores)
    }
}