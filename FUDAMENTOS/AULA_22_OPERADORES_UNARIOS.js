/* -: negação numérica.
   +: conversão para número.
   ++: incremento.
   --: decremento.
   !: negação lógica.
   typeof: tipo de variável.
   delete: remove propriedades de objetos.
   void: ignora o valor de uma expressão, retornando undefined. */

// --------- Principais operadores unários em JavaScript ------------------

// Operador de negação (-):

let x = 10;
console.log(-x);  // -10
console.log("---------------------------------")

// Operador de adição (+): 

let y = "5";
console.log(+y);  // 5 (de string para número)
console.log("---------------------------------")

// Incremento (++):
let z = 5;

console.log(++z);  // Pré-incremento: 6 (incrementa antes)
console.log(z++);  // Pós-incremento: 6 (usa o valor atual e incrementa depois)
console.log(z);    // 7
console.log("---------------------------------")

// Decremento (--):

let w = 10;

console.log(--w);  // Pré-decremento: 9 (decrementa antes)
console.log(w--);  // Pós-decremento: 9 (usa o valor atual e decrementa depois)
console.log(w);    // 8
console.log("---------------------------------")

// Operador lógico de negação (!):

let a = true;
console.log(!a);  // false

let b = 0;  // 0 é considerado "falsy"
console.log(!b);  // true (inverte de falsy para true)
console.log("---------------------------------")

// Operador typeof: 

let c = 42;
console.log(typeof c);  // "number"

let d = "Olá";
console.log(typeof d);  // "string"

let e = true;
console.log(typeof e);  // "boolean"

let f;
console.log(typeof f);  // "undefined"

console.log("---------------------------------")

// Operador delete:

let pessoa = { nome: "João", idade: 30 };
console.log(pessoa);  // { nome: "João", idade: 30 }

delete pessoa.idade;
console.log(pessoa);  // { nome: "João" }
console.log("---------------------------------")

// Operador void:

let resultado = void(5);
console.log(resultado);  // undefined
