//Peça ao usuário um número e calcule o produto de todos os números pares até ele.

const numero = 100;

let produtoNumPares = BigInt(1);

for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
        produtoNumPares *= BigInt(i)
    }    
}

console.log(produtoNumPares);
