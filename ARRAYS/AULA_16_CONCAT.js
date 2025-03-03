/* O método concat() em JavaScript é usado para juntar 
dois ou mais arrays ou strings, retornando um novo array 
ou nova string sem modificar os arrays ou strings originais.*/

// ---------- Exemplo com arrays: ----------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const resultado = array1.concat(array2);

console.log(resultado);  // [1, 2, 3, 4, 5, 6]
console.log(array1);     // [1, 2, 3] (original não é alterado)
console.log(array2);     // [4, 5, 6] (original não é alterado)
console.log("==========================")

// ---------- Exemplo com strings: ----------

const string1 = "Olá, ";
const string2 = "mundo!";

const resultado2 = string1.concat(string2);

console.log(resultado2);  // "Olá, mundo!"
console.log("==========================")

// ---------- Exemplo com múltiplos arrays: ----------

const array11 = [1];
const array22 = [2];
const array33 = [3];

const resultado3 = array11.concat(array22, array33);

console.log(resultado3);  // [1, 2, 3]