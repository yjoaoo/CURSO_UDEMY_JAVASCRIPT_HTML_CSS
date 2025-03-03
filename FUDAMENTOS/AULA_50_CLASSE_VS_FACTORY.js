// ------------------- CLASSE -------------------

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("joao")
p1.falar()

console.log("-------------------")

// ------------------- FUNÇÃO FACTORY -------------------

const criar_pessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criar_pessoa("Pedro")
p2.falar()