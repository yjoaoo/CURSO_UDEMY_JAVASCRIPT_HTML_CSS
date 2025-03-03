console.log(typeof Array, typeof new Array, typeof [])

let aprovado = new Array("Bia", "Carlos", "Ana")
console.log(aprovado)

// literal
aprovados = ["Bia", "Carlos", "Ana"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Undefined

aprovados[3] = "Paulo" // Adicionando 
aprovados.push("Julio") // adicionando maneira correta
console.log(aprovados.length)

aprovados[9] = "Rafa"
console.log(aprovados.length)
console.log(aprovados[6, 7, 8] === undefined)
console.log("==========================")
console.log(aprovados)
console.log("==========================")
aprovados.sort() // altera o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])
console.log("==========================")
aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1) // carlos excluido
console.log(aprovados)


