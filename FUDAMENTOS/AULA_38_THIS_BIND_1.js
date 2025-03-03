const pessoa = {
    saudacao: "Bom dia!!!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
console.log("-------------------")
falar() // consflito entre paradigmas: funcional e Poo
console.log("-------------------")
const falar_de_pessoa = pessoa.falar.bind(pessoa)
falar_de_pessoa()