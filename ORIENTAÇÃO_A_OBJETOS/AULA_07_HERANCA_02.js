// Cadeia de protótipos (Prototype chain)

Object.prototype.attr0 = "0"

const avo = {
    attr1: "A"
}

const pai = { __proto__: avo,
    attr2: "B"
}

const filho = { __proto__: pai,
    attr3: "C"
}

console.log(filho.attr0)
console.log(filho.attr1)
console.log(filho.attr2)
console.log(filho.attr3)
console.log("==========================")
// ------------------------ EXEMPLO ------------------------
// Definindo um objeto pai
const animal = {
    fala: function(){
        console.log("Animal faz barulho")
    }
}

// Criando um objeto filho que herda de animal
const cachorro = Object.create(animal)
cachorro.fala = function(){
    console.log("Chachorro late")
}

// Chamando o método
cachorro.fala()