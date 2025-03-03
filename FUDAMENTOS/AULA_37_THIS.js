// Global
// Global: Refere-se ao objeto global (window no navegador).
console.log(this); // Objeto global

// Funções regulares
// Funções regulares: Refere-se ao objeto global ou undefined (no modo estrito).
function exemploFuncao() {
    console.log(this); // Objeto global
}
exemploFuncao();
console.log("--------------------------------")

// Objeto e métodos
// Métodos de objetos: Refere-se ao próprio objeto.
const obj = {
    nome: 'Alice',
    falar() {
        console.log(this.nome); // 'Alice'
    }
};
obj.falar();
console.log("--------------------------------")

// Construtores
// Construtores/Classes: Refere-se à instância criada.
function Carro(modelo) {
    this.modelo = modelo;
}
const carro1 = new Carro('Honda');
console.log(carro1.modelo); // 'Honda'
console.log("--------------------------------")

// Arrow function
// Arrow functions: Herda o this do contexto onde foi definida.
const objetoArrowFunc = {
    nome: 'Carlos',
    saudacao: function() {
        const arrow = () => console.log(this.nome); // 'Carlos'
        arrow();
    }
};
objetoArrowFunc.saudacao();
