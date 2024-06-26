
const alunos = [
    { nome: 'Luana', nota: 8 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Juana', nota: 6 },
];


function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}


const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
