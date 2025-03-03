require("./global")
console.log(minhaApp.saudacao())

minhaApp.nome = "Eita!" // Usando o freeze não podera ser mudado
console.log(minhaApp.nome)