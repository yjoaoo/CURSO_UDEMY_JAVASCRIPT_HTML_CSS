/* 
Uma função factory em JavaScript é uma função que retorna 
um novo objeto sempre que é chamada. O termo "factory" vem 
da ideia de uma "fábrica" que "produz" objetos. Ao contrário 
de funções construtoras, as funções factory não usam o operador 
new, mas ainda assim permitem criar múltiplas instâncias de objetos 
com as mesmas propriedades e métodos. */

function criar_pessoa(){
    return{
        nome: "joao",
        sobrenome: "Brasil"
    }
}
console.log(criar_pessoa())

console.log("=====================================================")

function criar_produto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criar_produto("Caneta", 2.0))
console.log(criar_produto("Pc gamer", 10.000))

console.log("=====================================================")

function criar_ser_humano(nome, idade){
    return{
        nome: nome,
        idade: idade,
        falar(){
            console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
        }
    }
}

const ser_humano_1 = criar_ser_humano("joao", 19)
const ser_humano_2 = criar_ser_humano("Ana", 21)

ser_humano_1.falar()
ser_humano_2.falar()