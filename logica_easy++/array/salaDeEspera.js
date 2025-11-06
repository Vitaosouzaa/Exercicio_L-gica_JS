//Crie um programa que simule uma sala de espera, permitindo adicionar nomes ao array e exibir todos na tela.

const clientes = [];

function addClientes(cliente) {
    clientes.push(cliente)
    console.log(`O cliente ${cliente} foi adicionado na lista de espera`);
}

function mostrarClientes(){
    console.log("\n Lista de espera: ");
    if (clientes.length === 0) {
        console.log("Não existem clientes na lista");
    }else{
        clientes.forEach((cliente, index) => {
            console.log(`${index + 1}.${cliente}`);
        })
    }
}

addClientes("Maicon");
addClientes("Carlos");
addClientes("Amanda");
addClientes("Camila");

mostrarClientes();