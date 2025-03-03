const fabriantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabriantes.forEach(imprimir) // Chama a função imprimir para cada elemento do array

fabriantes.forEach(frabricante => console.log(frabricante)) // Função anônima que imprime o fabricante

// -----------------------------------------------------------------

console.log("===================== MAIS EXEMPLOS ===================================")

const notas = [7.7, 5.2, 6.5, 8.9, 7.1, 9.2, 3.1]

//Sem callback

const notas_baixas_1 = []
for (let i in notas){
    if (notas[i] < 7) {
        notas_baixas_1.push(notas[i])
    }
}
console.log(notas_baixas_1)


// Com callback

const notas_baixas_2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notas_baixas_2)

const notas_menor_que_7 = nota => nota < 7
const notas_baixas_3 = notas.filter(notas_menor_que_7)
console.log(notas_baixas_3)

