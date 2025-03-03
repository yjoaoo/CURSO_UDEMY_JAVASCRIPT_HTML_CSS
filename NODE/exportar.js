console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // não funciona atribuir um novo objeto assim
console.log(module.exports)

exports = { // não funciona atribuir um novo objeto assim
    nome: "Joao"
}

console.log(module.exports)

module.exports = {publico: true} // Assim funciona atribuir um novo objeto