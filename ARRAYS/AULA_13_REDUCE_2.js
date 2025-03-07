const alunos = [
    { nome: "João", nota: 7.3, bolsista: false},
    { nome: "Maria", nota: 9.2, bolsista: true},
    { nome: "Pedro", nota: 9.8, bolsista: false},
    { nome: "Ana", nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

console.log(alunos.map(a => a.bolsista))
const resultado_bolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, bolsista){
    return acumulador && bolsista
})

console.log(resultado_bolsista)
console.log("==========================")
// Desafio 2: algum aluno é bolsista? 

const resultado_bolsista_aluno = alunos.map(a => a.bolsista).reduce(function(acumulador, bolsista){
    return acumulador || bolsista
})

console.log(resultado_bolsista_aluno)




