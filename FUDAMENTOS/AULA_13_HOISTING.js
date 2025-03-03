// Usando var -----------------------------------------------

console.log(`a =`,a)
var a = 2
console.log(`a =`,a)

console.log("---------------------------")

function teste(){
    console.log(`a =`, a)
    var a = 2
    console.log(`a =`, a)
}
teste()
console.log(`a =`, a)
console.log("---------------------------")
// Usando let -----------------------------------------------

// console.log(`b =`,b)
// let b = 2
// console.log(`b =`,b)  ERRO: ReferenceError: Cannot access 'b' before initialization