// Função em js é Fist-Class Object (Citizens)
// Higher-order function

// ----------- Criar de forma literal ------------
function funcao_1(){

}

// ----------- Armazernar em variavel ------------

const funcao_2 = function(){

}

// ----------- Armazenar em um array ------------

const array = [function(a, b) {return a + b}, funcao_1, funcao_2]

console.log(array[0](2, 5))

// ----------- Armazenar em um atributo de objeto ------------

const objeto = {}
objeto.falar = function () {
    return "Opaaaa"
}
console.log(objeto.falar())

// ----------- Passar função como parametro ------------

function run(funcao){
    funcao()
}

run(function (){ console.log("Executando...")})

// ----------- Uma função pode conter uma função ------------

function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 6)(7)
