//Crie um programa que simule uma agenda de contatos, onde cada contato tem: {nome, telefone, email}. Deve ser possível adicionar, remover e buscar contatos.

class Contato {
    constructor (nome, telefone, email) {
        this.nome = nome;
        this.telefone= telefone;
        this.email = email;
    }
}

class Agenda { //- Define uma classe chamada Agenda, que vai armazenar e gerenciar os contatos.
    contatos = []; //- Cria uma propriedade chamada contatos, que é um array vazio.

    addContato(contato) {
        if (contato instanceof Contato) {
// Verifica se o objeto passado é uma instância da classe Contato.
//Isso garante que só contatos válidos sejam adicionados.
            this.contatos.push(contato)
        }else {
            console.log("O contato precisa ser uma instância da classe Contato.");
        }
    }

    listarContatos(){
        return this.contatos;
        //- Retorna o array completo de contatos armazenados na agenda.
    }

    buscarPorNome(nome) {
        return this.contatos.filter(contato => contato.nome.toLowerCase() === nome.toLowerCase());
        //- Usa .filter() para retornar todos os contatos cujo nome corresponde ao nome buscado.
    }

    removerContato(nome){
        const index = this.contatos.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
        //- Usa .findIndex() para encontrar o índice do contato com o nome correspondente.

        if (index !== -1) {
            this.contatos.splice(index, 1);//- Remove o contato da lista usando .splice
            console.log(`Contato "${nome}" removido com sucesso.`);
        } else {
            console.log(`Contato "${nome}" não encontrado.`);
        }
    }
}

const agenda = new Agenda();
 
const vitor = new Contato("Vitor", 993301686, "vitor@emaail.com");
const carlos = new Contato("Carlos", 995301786, "carlos@emaail.com");

agenda.addContato(vitor)
agenda.addContato(carlos)

console.log(agenda.listarContatos());

console.log(agenda.buscarPorNome('vitor'));

console.log(agenda.removerContato('vitor'));
