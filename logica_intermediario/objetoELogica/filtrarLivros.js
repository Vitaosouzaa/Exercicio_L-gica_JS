//Crie uma função que receba um array de objetos representando livros ({titulo, autor, ano}) e filtre apenas os livros lançados após 2010.

const livros = [
    {
        titulo: 'Um bom livro',
        autor: 'Vitor',
        ano: 2005
    },
    {
        titulo: 'Um bom livro 2',
        autor: 'Vitor',
        ano: 2008
    },
    {
        titulo: 'Um bom livro 3',
        autor: 'Vitor',
        ano: 2010
    },
    {
        titulo: 'Um bom livro 4',
        autor: 'Vitor',
        ano: 2012
    },
    {
        titulo: 'Um bom livro 5',
        autor: 'Vitor',
        ano: 2014
    },
    {
        titulo: 'Um bom livro 6',
        autor: 'Vitor',
        ano: 2018
    },
]

function todosOsLivros(colecao) {
    return colecao.filter(data => data.ano > 2010)
}

console.log(todosOsLivros(livros));
