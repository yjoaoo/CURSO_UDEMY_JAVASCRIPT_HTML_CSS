console.log("============== REVISÂO 1 ====================")
// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Tempalte String
const produto = "celular"
console.log(`${produto} é caro`)

// Destructring
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade, nome} = {nome: "Ana", idade: 19}
console.log(idade, nome)
console.log("============== REVISÂO 2 ====================")
// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function (this)
const exemplo = () => console.log(this === exports)
const exemplo2 = exemplo.bind({})
exemplo()
exemplo2()

// parametro default
function log(texto = "Node") {
    console.log(texto)
}
log()
log("Parametro mais forte")

// Operador rest
function total(...n) {
    let total = 0
    n.forEach(numeros => total += numeros)
    return total
}
console.log(total(2, 3, 4, 5))
console.log("============== REVISÂO 3 ====================")

// ES8 : Object.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const individuo = "Carla"
const pessoa = {
    nome,
    ola(){
        return "Ola!"
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal {
    falar(){
        return "Au au"
    }
}

console.log(new Cachorro().falar())