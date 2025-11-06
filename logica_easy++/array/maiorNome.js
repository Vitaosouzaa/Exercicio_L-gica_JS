//Crie um array com 5 palavras e verifique qual delas tem o maior número de letras.

const lista = ['Vitor', 'Igor', 'Nilton', 'Andre', 'Amanda'];

const maiorNome = lista.reduce((maior, atual) => 
    atual.length > maior.length ? atual : maior
)
console.log(maiorNome);


// Como .reduce() funciona aqui:
// - maior → acumulador que guarda o nome mais longo encontrado até o momento.
// - atual → o nome que está sendo analisado na iteração atual.
// - atual.length > maior.length → compara o comprimento dos dois nomes.
// - Se atual for mais longo, ele substitui maior.
// - Caso contrário, maior continua sendo o nome mais longo.
// 🔎 Resultado final: após percorrer todos os nomes, maisLongo conterá o nome com mais letras.

