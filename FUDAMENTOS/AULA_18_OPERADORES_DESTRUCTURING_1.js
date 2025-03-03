/* O destructuring em JavaScript é uma funcionalidade que permite extrair dados de arrays, objetos, 
e até funções, atribuindo-os a variáveis de maneira mais concisa. Ele facilita o acesso e manipulação 
de dados de estruturas complexas, melhorando a legibilidade do código.
Existem dois principais tipos de destructuring: destructuring de arrays e destructuring de objetos. */ 

// -------- Destructuring de Arrays ---------------

const numeros = [10, 20, 30]

// Extraindo os valores do array para variáveis separadas
const [a, b, c] = numeros

console.log(a) // 10
console.log(b) // 20
console.log(c) // 30
console.log("-------------------------------------")

// -------- Destructuring de Objetos ---------------

const pessoa = {
    nome: "joao",
    idade_1: 19,
    cidade: "Sao Sebastiao"
}

// Extraindo as propriedades do objeto
const {nome, idade_1, cidade} = pessoa

console.log(nome);   // João
console.log(idade_1);  // 25
console.log(cidade); // São Paulo
console.log("-------------------------------------")


// ----------- Renomeando variáveis: -------------------

const pessoa_2 = {
    nome: 'João',
    idade_2: 25
  };
  
// Renomeando a variável `nome` para `primeiroNome`
const { nome: primeiroNome, idade_2 } = pessoa_2;
  
console.log(primeiroNome); // João
console.log("-------------------------------------")

// ----------- Renomeando variáveis: -------------------

const pessoa_3 = {
    nome_3: 'João',
    endereco_3: {
      rua_2: 'Rua A',
      numero: 123
    }
  };
  
// Extraindo propriedades de objetos aninhados
const { endereco_3: { rua_2, numero } } = pessoa_3;
  
console.log(rua_2);    // Rua A
console.log(numero); // 123


