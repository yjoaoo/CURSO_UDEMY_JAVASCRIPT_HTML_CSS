function Carro(modelo, ano){
    this.modelo = modelo // Propriedade
    this.ano = ano       // Propriedade

    // Método
    this.descricao = function(){
        console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}`)
    }
}

// Criando novos objetos usando a função construtora
const carro_1 = new Carro("BMW", 2020)
const carro_2 = new Carro("Audi", 2021)

carro_1.descricao()
carro_2.descricao()
