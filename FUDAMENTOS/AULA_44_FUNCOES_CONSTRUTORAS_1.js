/*Em JavaScript, funções construtoras são uma maneira de criar objetos 
usando uma função que atua como um "molde" para os objetos. Elas 
são semelhantes às classes em outras linguagens de programação orientadas a objetos. */


function Carro(velocidade_maxima = 200, delta = 5){
    // let velocidade_atual: Number
    let velocidade_atual = 0
    
    // metodo publico
    this.acelerar = function(){
        if(velocidade_atual + delta <= velocidade_maxima){
            velocidade_atual += delta
        }else {
            velocidade_atual = velocidade_maxima
        }
    }
    // metodo publico
    this.getvelocidade_atual = function (){
        return velocidade_atual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidade_atual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getvelocidade_atual())
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidade_atual())

console.log(typeof Carro)
console.log(typeof ferrari)