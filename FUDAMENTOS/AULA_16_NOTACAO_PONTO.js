// Use notação ponto para acessar propriedades e métodos de objetos, 
// desde que os nomes das propriedades sejam identificadores válidos.
// Se o nome da propriedade contiver caracteres inválidos (como espaços, hífens) 
// ou for dinâmico, use notação de colchetes.

// Estrutura 
// objeto.propriedade
// objeto.metodo()

// Exemplo de notação ponto com propriedades:
// Se você tiver um objeto pessoa, pode usar a notação ponto para acessar suas propriedades:

const pessoa = {
    nome: "joao",
    idade: 25,
    cidade: "Sao Sebastiao"
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cidade)

// Exemplo de notação ponto com métodos
// Objetos também podem ter métodos (funções associadas ao objeto). 
// A notação ponto é usada para invocar esses métodos.
console.log("---------------------------------------")
const pessoa_2 = {
    nome: "joao",
    saudar: function(){
        console.log(`Ola, ` + this.nome + `!`)
    }
}

pessoa_2.saudar(); 
console.log("---------------------------------------")
// Notação ponto com arrays
// No JavaScript, arrays são objetos, então você também pode 
// usar a notação ponto para acessar métodos dos arrays.

const frutas = ['maçã', 'banana', 'laranja'];

console.log(frutas.length);   // Acessa a propriedade 'length' do array
console.log(frutas.join(', '));  // Chama o método 'join' do array

/* Diferença entre notação ponto e notação de colchetes
A notação ponto só pode ser usada quando o nome da propriedade é um identificador válido 
(sem espaços, hífens, números no início, etc.) 
Caso contrário, deve-se usar a notação de colchetes. */
console.log("---------------------------------------")
const pessoa_3 = {
    'nome-completo': 'João Pedro',
    idade: 25
};

// Notação ponto
console.log(pessoa_3.idade);  // Correto

// Notação de colchetes
console.log(pessoa_3['nome-completo']);  // Correto

/*Exemplo com propriedades dinâmicas
Às vezes, o nome da propriedade é dinâmico e precisa ser avaliado 
em tempo de execução. Nesse caso, use a notação de colchetes. */

const propriedade = 'idade';
const pessoa_4 = {
    nome: 'João',
    idade: 25
};

console.log(pessoa_4[propriedade]);  // Acessa a propriedade 'idade'