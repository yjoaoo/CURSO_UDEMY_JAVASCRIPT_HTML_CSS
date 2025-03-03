/* Funções anônimas em JavaScript são funções que não possuem um nome e 
são geralmente atribuídas a uma variável ou passadas como argumentos para 
outras funções. Elas são úteis quando uma função é necessária apenas uma 
vez ou quando queremos manter o código mais conciso. */



const soma = function (x, y){
    return x + y
}

const imprimir_resultado = function(a, b, opreracao = soma){
    console.log(opreracao(a, b))
}

imprimir_resultado(3, 9)
imprimir_resultado(2, 6, soma)
imprimir_resultado(3, 6,function(x, y){
    return x - y
})

imprimir_resultado(3, 7, (x, y) => x* y) // arrow function

console.log("-------------------------------")

const pessoa = {
    falar: function(){
        console.log("Opa")
    }
}

pessoa.falar()