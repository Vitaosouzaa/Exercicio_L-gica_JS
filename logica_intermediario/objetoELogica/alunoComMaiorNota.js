// Crie uma função que receba um array de objetos de alunos ({nome, nota}) e retorne o aluno com a maior nota.

const alunos = [
    {
        nome: 'Carlin',
        nota: 9.5
    },
    {
        nome: 'Zé',
        nota: 9.6
    },
    {
        nome: 'Du',
        nota: 8
    },
    {
        nome: 'Camila',
        nota: 0
    },
    {
        nome: 'Vitória',
        nota: 5
    },
]

function descobrirMaiorNota(listaDeAlunos) {
    let melhorAluno = listaDeAlunos[0] // começa com o primeiro aluno

    for (const aluno of listaDeAlunos) {
        if(aluno.nota > melhorAluno.nota){
           melhorAluno = aluno
        }
    }
    return melhorAluno
}

console.log(descobrirMaiorNota(alunos));
