/* Esse código ilustra a herança em JavaScript através de protótipos. 
Ele mostra como criar objetos que herdam propriedades de um objeto pai,
 como definir propriedades com atributos específicos e como iterar sobre 
 propriedades, distinguindo entre propriedades próprias e herdadas. Isso é 
 muito útil para a organização e reutilização de código em aplicações JavaScript. */

const pai = {nome: "joao", cor_cabelo: "Preto"}

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.cor_cabelo)

const filha2 = Object.create(pai,{
    nome: {value: "Bia", writable: false, enumerable: true}
})
   
console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.cor_cabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}

