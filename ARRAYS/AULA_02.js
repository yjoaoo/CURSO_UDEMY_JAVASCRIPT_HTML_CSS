const pilotos = ["joao", "Vitor", "Jamuel", "Eric"]
pilotos.pop() // Eric saiu
console.log(pilotos)

pilotos.push("Eric") // Eric voltou
console.log(pilotos)

pilotos.shift() // remove o primeiro = joao
console.log(pilotos)

pilotos.unshift("Joao") // adiciona o primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos

// add
pilotos.splice(2, 0, "Pedro", "Lucas")
console.log(pilotos)

// remove

pilotos.splice(3, 1) // lucas saiu , tirou o 3 elemento
console.log(pilotos)

console.log("-----------------")

const alguns_pilotos = pilotos.slice(2) // novo array
console.log(alguns_pilotos) // pegou a partir do 2 elemento

const alguns_pilotos_2 = pilotos.slice(1, 4) // vai ate o indice 4 mas não o inclui
console.log(alguns_pilotos_2)

