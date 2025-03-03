/* Herança de Construtores:
Você pode criar uma função construtora que define um objeto e suas propriedades. 
Outras funções construtoras podem herdar de uma função construtora anterior usando 
Object.create() ou Object.setPrototypeOf().*/

function Animal1(nome){
    this.nome = nome
}

Animal1.prototype.falar = function(){
    console.log(`${this.nome} faz barulho`)
}

function Cachorro2(nome){
    Animal1.call(this,nome)
}

Cachorro2.prototype = Object.create(Animal1.prototype)
Cachorro2.prototype.constructor = Cachorro2

Cachorro2.prototype.falar = function(){
    console.log(`${this.nome} late`)
}

const dog1 = new Cachorro2("ZION")
dog1.falar()

console.log("==========================")

/* Classes e Herança:

Com a introdução da sintaxe de classes no ECMAScript 2015 (ES6), 
a herança tornou-se mais intuitiva. Você pode usar class e extends 
para herdar propriedades e métodos de uma classe pai.*/

class Animal2 {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz barulho.`);
    }
}

class Cachorro1 extends Animal2 {
    falar() {
        console.log(`${this.nome} late.`);
    }
}

const dog2 = new Cachorro1('Rex');
dog2.falar(); // Saída: "Rex late."