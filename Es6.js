const alunos = [
    { nome: 'André', nota: 7 },
    { nome: 'Izaque', nota: 5 },
    { nome: 'Gabriel', nota: 8 },
    { nome: 'yasmim', nota: 4 },
    { nome: 'Guilherme', nota: 6 },
    { nome: 'Júlia', nota: 9 }
];


const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log('Alunos aprovados:');
console.log(alunosAprovados)