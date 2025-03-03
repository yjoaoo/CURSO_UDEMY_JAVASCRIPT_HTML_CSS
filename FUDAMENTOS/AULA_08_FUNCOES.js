// console.log(typeof Object)

// class Produto {}
// console.log(typeof Produto)

// ------------ FUNÇOES ------------------
// Funçao sem retorno --------------------
// function imprimir_soma(a, b) {
//     console.log(a + b)
// }

// imprimir_soma(2, 3)
// imprimir_soma(2) // NaN not a number
// imprimir_soma(2, 3, 4, 5, 6) // vai pegar os dois primeiros parametros
// imprimir_soma() // NaN

// Funçao com retorno ---------------------

function soma(a, b){
    return a + b
}

console.log(soma(7, 3))
soma(2, 4)  // NaN
console.log()
// ----------- FUNÇOES ---------------------
// Armazenando uma funcao em uma variavel

const imprimir_soma = function(a, b){
    console.log(a + b)
}

imprimir_soma(2, 3)
console.log()
// Armazenando uma funcao arrow em uma variavel 

const soma_numero = (a, b) => {
    return a + b
}

console.log(soma_numero(10, 28))
console.log()

// Retorno implicito

const subtracao = (a, b) => a - b
const imprimir2 = a => console.log(a)


console.log(subtracao(1, 9))
imprimir2("Que legal!!")


