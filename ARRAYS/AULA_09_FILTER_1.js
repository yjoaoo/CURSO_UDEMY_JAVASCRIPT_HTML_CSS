/* O método filter em JavaScript é utilizado para 
criar um novo array contendo todos os elementos do 
array original que atendem a uma condição especificada 
em uma função. Ele é especialmente útil quando você quer 
filtrar ou extrair elementos com base em uma condição.*/

//----------- Filtrando Números Maiores que 10 ----------- 

const numeros = [5, 12, 8, 130, 44]

const maiores_que_10 = numeros.filter(function(valor){
    return valor > 10 // Filtra apenas os números maiores que 10
})

console.log(maiores_que_10)
console.log("==========================")

//----------- Filtrando Números Pares -----------

const numeros_2 = [1, 2, 3, 4, 5, 6]

const pares = numeros_2.filter(function(valor){
    return valor % 2 === 0
})

console.log(pares)
console.log("==========================")

//----------- Filtrando Objetos em um Array -----------

const pessoas_3 = [
    {nome: "joao", idade: 25},
    {nome: "Ana", idade: 17},
    {nome: "Pedro", idade: 20}
]

const maiores_idade = pessoas_3.filter(function(pessoa){
    return pessoa.idade >= 18
})

console.log(maiores_idade)


