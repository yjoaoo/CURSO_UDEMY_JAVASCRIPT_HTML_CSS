const escola =  "Cem01"

console.log(escola.charAt(4)) // acessar o index da palavra
console.log(escola.charAt(5)) // valor nulo 
console.log(escola.charCodeAt(3)) // tabela unicode
console.log(escola.indexOf("m"))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(1, "e"))
console.log("Ana,Maria,Pedro".split(","))
console.log()
// ------------------------------------- TEMPLATE STRINGS --------------------------------------

const nome = "Joao"

console.log(`Olá ${nome}!`) // Tipo f"Strings" mas com crase e $

// EXPRESSOES...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Colocou em maiusculo 
console.log(`Ei... ${up("Cuidado")}!`)

