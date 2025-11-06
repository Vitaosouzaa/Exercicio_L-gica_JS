//Crie um programa que simule um controle de tarefas (to-do list) com funções para adicionar, remover e marcar como concluída.

class Tarefas {
    constructor(tarefa) {
        this.tarefa = tarefa;
        this.concluida = false;
    }
}

class ManusearLista {
    listaDeTarefas = [];

    addTarefas(acao){
        if(acao instanceof Tarefas){
            this.listaDeTarefas.push(acao)
        }else{
            console.log("Isso não é uma tarefa");
        }
    }

    listarTarefas(){
        return this.listaDeTarefas.map(t => ({
            tarefa: t.tarefa,
            status: t.concluida ? "Concluída" : "Pendente"
        }));
    }

    removerTarefa(acao){
        const index = this.listaDeTarefas.findIndex(c => c.tarefa === acao.tarefa)

        if (index !== -1) {
            this.listaDeTarefas.splice(index, 1)
            console.log("Tarefa removida");
        }else{
            console.log("Tarefa não existe");
        }
    }

    marcarComoConcluida(acao){
        const tarefa = this.listaDeTarefas.find(t => t.tarefa === acao.tarefa);
        if (tarefa) {
            tarefa.concluida = true;
            console.log(`Tarefa "${tarefa.tarefa}" marcada como concluída.`);
        } else {
            console.log("Tarefa não encontrada.");
        }
    }
}

const list = new ManusearLista();

const tarefaUm = new Tarefas ("Arrumar o quarto");
const tarefaDois = new Tarefas ("Arrumar a Sala");
const tarefaTres = new Tarefas ("Arrumar a Cozinha");

list.addTarefas(tarefaUm);
list.addTarefas(tarefaDois);
list.addTarefas(tarefaTres);

list.removerTarefa(tarefaDois);

console.log(list.listarTarefas());







