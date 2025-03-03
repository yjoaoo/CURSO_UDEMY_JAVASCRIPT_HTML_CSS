const modulo_a = require("../../moduloA") // ../ = saindo das pastas
console.log(modulo_a.ola)

const c = require("./pasta_c/index") //(acessando a pasta + referenciando o nome do arquivo)
console.log(c.ola2)

