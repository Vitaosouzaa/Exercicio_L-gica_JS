//Crie um programa que simule um carrinho de compras, permitindo adicionar produtos (nome, preço, quantidade) e calcular o total.

class Produtos {
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco
        this.quantidade = quantidade;
    }
}

class CarrinhodeCompras {
    carrinho = [];

    adicionarProdutos(produto) {
        if(produto instanceof Produtos){
            this.carrinho.push(produto)
        }else{
            console.log("Produto inválido");
        }
    }

    listarProdutos(){
        return this.carrinho;
    }

    calcularValorTotal(){
        let total = 0;
        for(let produto of this.carrinho){
            total += produto.preco * produto.quantidade
        }
        return `O total da compra foi: R$ ${total},00`
    }
}

const carrinho = new CarrinhodeCompras();

const feijao = new Produtos ("Feijão", 50, 10);
const arroz = new Produtos ("Arroz", 100, 3);
const picanha = new Produtos ("Picanha", 300, 12);

carrinho.adicionarProdutos(feijao);
carrinho.adicionarProdutos(arroz);
carrinho.adicionarProdutos(picanha);

console.log(carrinho.listarProdutos());
console.log(carrinho.calcularValorTotal());
