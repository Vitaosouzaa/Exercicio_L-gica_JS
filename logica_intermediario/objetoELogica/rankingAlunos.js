//Crie uma função que receba uma lista de alunos com notas e retorne um ranking do maior para o menor.

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
    return listaDeAlunos.sort((a, b) => b.nota - a.nota)// ordenado do maior para o menor
}

console.log(descobrirMaiorNota(alunos));
