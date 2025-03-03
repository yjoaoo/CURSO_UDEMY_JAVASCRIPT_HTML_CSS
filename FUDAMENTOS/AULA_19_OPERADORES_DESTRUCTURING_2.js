/* 1 - Destructuring de arrays permite extrair elementos de arrays pela posição.
   2 - Destructuring de objetos permite extrair propriedades de objetos pelo nome.
   3 - Pode ser usado em funções para manipular parâmetros de forma mais clara.
   4 - O rest permite capturar o restante dos elementos ou propriedades.
   5 - É uma maneira concisa e poderosa de lidar com estruturas de dados complexas em JavaScript. */


// ------------------ Destructuring em Funções ----------------------

function somar([a, b]) {
    return a + b;
  }
  
console.log(somar([2, 3]));  // 5

console.log("----------------------------- ")

// ------------------ Destructuring com objetos em funções: --------------------

function mostrarPessoa({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
  }
  
  const pessoa_1 = {
    nome: 'João',
    idade: 25
  };
  
mostrarPessoa(pessoa_1);  // Nome: João, Idade: 25
console.log("----------------------------- ")

// ------------------ Destructuring com Rest Parameters --------------------
// ------------------ Destructuring de arrays com rest: -----------------
const numeros_1 = [1, 2, 3, 4, 5];

// Pegando o primeiro valor e o restante com o rest
const [primeiro_1, ...restante_1] = numeros_1;

console.log(primeiro_1);  // 1
console.log(restante_1);  // [2, 3, 4, 5]
console.log("----------------------------- ")

// ------------------ Destructuring de objetos com rest: -----------------
const numeros_2 = [1, 2, 3, 4, 5];

// Pegando o primeiro valor e o restante com o rest
const [primeiro_2, ...restante_2] = numeros_2;

console.log(primeiro_2);  // 1
console.log(restante_2);  // [2, 3, 4, 5]
console.log("----------------------------- ")

// ------------------ Destructuring em Loops -----------------

const pessoas_2 = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
  ];
  
  // Usando destructuring no loop
  for (const { nome, idade } of pessoas_2) {
    console.log(`${nome} tem ${idade} anos.`)
}
