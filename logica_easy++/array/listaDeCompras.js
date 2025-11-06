//Crie um programa que simule uma lista de compras: o usuário pode adicionar itens, remover e listar os produtos atuais (use array).

const listaDeCompras= [];

function addProdutosNaLista(produto) {
    listaDeCompras.push(produto);
    console.log(`Produto "${produto}" adicionado a lista`);
}

function removerProdutosNaLista(produto) {
    const index = listaDeCompras.indexOf(produto);
    if(index !== -1){
        listaDeCompras.splice(index, 1);
        console.log(`Produto "${produto}" removido da lista`);
    }else{
        console.log(`⚠️ Produto "${produto}" não encontrado na lista.`);
    }
}

function listarProdutos() {
    if(listaDeCompras.length === 0){
        console.log("Sua Lista está vazia");
        
    }
    else{
        console.log("Lista de compras: ");
        listaDeCompras.forEach((item, i) => {
        console.log(`Produto ${i + 1}: ${item}`);
        });
    }
}

addProdutosNaLista("arroz")
addProdutosNaLista("feijão")
removerProdutosNaLista("feijão")
listarProdutos()