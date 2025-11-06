//Crie uma função que calcule o produto escalar entre dois vetores (arrays numéricos do mesmo tamanho).

function produtoEscalar(a, b) {
    if (a.length !== b.length) throw "Os arrays devem ter o mesmo valor"

    return a.reduce((soma, val, i) => soma + val * b[i], 0)
}

const a = [5,10,20,30];
const b = [2,4,8,16];

console.log(produtoEscalar(a, b));

// if (a.length !== b.length)
// - Garante que os dois vetores tenham o mesmo tamanho.

// a.reduce((soma, val, i) => soma + val * b[i], 0)
// - reduce() percorre o vetor a, acumulando a soma do produto de cada elemento com o correspondente em b.
// - val é o valor atual de a[i]
// - b[i] é o valor correspondente no vetor b
// - soma + val * b[i] é o produto escalar parcial
// - Começa com 0 como valor inicial
