//Crie uma função que receba uma lista de produtos (nome, preço, quantidade) e calcule o valor total do estoque.


//exemplo calcula 1 unico produto
const produto = {
    nome: 'mesa',
    preço: 35,
    quantidade: 20,

    calcularValorTotal(){
        return this.preço * this.quantidade
    }
}

console.log(produto.calcularValorTotal());


//exemplo calcula diversos produtos;
//uma versão que percorre um array e calcula o valor total do estoque.

const produtos = [
    {nome: 'mesa',
    preço: 35,
    quantidade: 20,},

    {nome: 'cadeira',
    preço: 25,
    quantidade: 50,},

    {nome: 'armario',
    preço: 100,
    quantidade: 10,}
]

function calcularValorTotalEstoque(listaDeProdutos) {
  let total = 0;

  for (const produto of listaDeProdutos) {
    total += produto.preço * produto.quantidade;
  }

  return total;
}

console.log(calcularValorTotalEstoque(produtos))