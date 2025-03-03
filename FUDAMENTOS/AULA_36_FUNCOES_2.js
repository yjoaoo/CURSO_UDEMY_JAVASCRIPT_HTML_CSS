// Parâmetros e Retorno são opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(5, 5))
console.log("--------------------------------")
// Parâmetros Variáveis

function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log("--------------------------------")

// Parâmetro Padrão 1

function soma_1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma_1(), soma_1(3), soma_1(1, 2, 3), soma_1(0, 0, 0))
console.log("--------------------------------")

// Parâmetro Padrão 2

function soma_2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma_2(), soma_2(3), soma_2(1, 2, 3), soma_2(0, 0, 0))
console.log("--------------------------------")

// Valor padrão de es2015
function soma_3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma_3(), soma_3(3), soma_3(1, 2, 3), soma_3(0, 0, 0))



