// objeto é uma coleção dinâmica de pares chave/valor
// Existem várias maneiras de criar objetos em JavaScript:

// Usando Notação de Objeto Literal

const pessoa = {
    nome: "joao",
    idade: 19,
    cidade: "São Sebastião"
}

console.log(pessoa)
console.log("==========================")

// Usando a Função Construtora

function carro(marca, modelo, ano){
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const meu_carro = new carro("Fiat", "Siena", 2009)
console.log(meu_carro)
console.log("==========================")

// Usando Classes

class Animal{
    constructor(tipo, nome){
        this.tipo = tipo
        this.nome = nome
    }

    fazer_som(){
        console.log(`${this.nome} faz um som.`)
    }
}

const meu_animal = new Animal("Cachorro", "Rex")
console.log(meu_animal)
meu_animal.fazer_som()
console.log("==========================")

/* Acessando Propriedades:
Você pode acessar as propriedades de um objeto usando a notação de ponto (.) 
ou a notação de colchetes ([]). */

console.log(pessoa.nome); // Notação de ponto
console.log(pessoa["idade"]); // Notação de colchetes
console.log("==========================")

/* Modificando Propriedades:
As propriedades dos objetos podem ser modificadas a qualquer momento.*/

pessoa.idade = 31; // Modificando a propriedade idade
console.log(pessoa.idade); // 31
console.log("==========================")


/* Adicionando e Removendo Propriedades:
Você pode adicionar novas propriedades ou remover propriedades existentes. */

pessoa.email = "joao@example.com"; // Adicionando nova propriedade
console.log(pessoa.email); // "joao@example.com"

delete pessoa.cidade; // Removendo a propriedade cidade
console.log(pessoa.cidade); // undefined
console.log("==========================")

// ------------------------------------ EXEMPLO COMPLETO ---------------------------------------

const estudante = {
    nome: "Ana",
    idade: 22,
    notas: {
        matematica: 8,
        portugues: 9,
        ciencias: 10
    },
    media: function(){
        const soma = this.notas.matematica + this.notas.portugues + this.notas.ciencias
        return soma / 3
    }
}

console.log(`Nome: ${estudante.nome}`);
console.log(`Média: ${estudante.media()}`); // Média: 9