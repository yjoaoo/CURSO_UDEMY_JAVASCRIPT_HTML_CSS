class Pessoa_1{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa_1("joao")
p1.falar()
// ------------------------------------------------------------------------


function Pessoa(nome, idade){
    this.nome = nome 
    this.idade = idade

    this.saudacao = function(){
        console.log(`Olá meu nome é ${this.nome}, e eu tenho ${this.idade} anos de idade.`)
    }
}

const pessoa_1 = new Pessoa("Joao", 19)
pessoa_1.saudacao()