/* Um protótipo em JavaScript é um mecanismo que permite que objetos 
herdem propriedades e métodos de outros objetos. Essa é uma das 
características fundamentais do JavaScript e faz parte do seu modelo de herança 
baseado em protótipos. Aqui estão alguns pontos-chave para entender o que é um protótipo:*/

/* Em resumo, o protótipo é uma forma de implementar herança em JavaScript, 
permitindo que objetos compartilhem propriedades e métodos, promovendo a 
reutilização de código e a organização do mesmo. Esse mecanismo é central 
para como a linguagem funciona e é fundamental para entender a estrutura e o 
comportamento dos objetos em JavaScript.*/


const ferrari = {
    modelo: "F40",
    velmax: 324
}

const volvo = {
    modelo: "v40",
    velmax: 220
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

