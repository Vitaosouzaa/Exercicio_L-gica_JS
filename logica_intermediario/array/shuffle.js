//Crie uma função que embaralhe os elementos de um array (shuffle

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const nomes = ['Ana', 'Bruno', 'Carlos', 'Duda', 'Eva'];
console.log(embaralhar(nomes));
