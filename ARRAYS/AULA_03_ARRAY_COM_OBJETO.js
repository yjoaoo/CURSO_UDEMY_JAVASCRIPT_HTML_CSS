const quase_array = {0: "Joao", 1: "Ana", 2: "Pedro"}
console.log(quase_array)

Object.defineProperty(quase_array, "toString",{
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quase_array[0])

const meu_array = ["Joao", "Ana", "Bia"]
console.log(quase_array.toString(), meu_array)