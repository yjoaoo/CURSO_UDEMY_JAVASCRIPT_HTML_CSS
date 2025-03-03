console.log(subtracao(4, 10))
// console.log(soma(13, 17)) ReferenceError: Cannot access 'soma' before initialization */

// --------------- function declaration ---------------
function subtracao(x, y){
    return x - y
}
console.log(subtracao(13, 17))

// --------------- function expression ---------------
const soma = function(x, y){
    return x + y
}
console.log(soma(13, 17))

// --------------- named function expression ---------------

const multiplicacao = function multiplicacao(x, y){
    return x * y
}

console.log(multiplicacao(5, 5))
