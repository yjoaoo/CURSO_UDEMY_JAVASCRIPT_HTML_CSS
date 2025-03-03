const aprovados = ["Joao", "Vitor", "Eric", "Jamuel"]

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
})

console.log()

aprovados.forEach(nome => console.log(nome))

console.log()

const exibir_aprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibir_aprovados)

