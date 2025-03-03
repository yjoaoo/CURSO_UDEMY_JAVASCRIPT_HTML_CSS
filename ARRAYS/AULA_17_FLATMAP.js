/* O método flatMap() em JavaScript é uma combinação 
dos métodos map() e flat(). Ele primeiro aplica uma 
função de mapeamento a cada elemento de um array e, em 
seguida, achata o array resultante em um nível. É útil 
quando a função de mapeamento retorna arrays, pois evita 
ter que usar map() seguido de flat() separadamente.*/

// ----------- Exemplo básico: ----------

const numeros = [1, 2, 3, 4];

// Função de mapeamento que duplica os números e retorna um array
const resultado1 = numeros.flatMap(num => [num, num * 2]);

console.log(resultado1);  // [1, 2, 2, 4, 3, 6, 4, 8]
console.log("==========================")


// ---------- Exemplo com strings: ----------

const frases = ["Olá mundo", "Aprendendo JavaScript"];

const resultado2 = frases.flatMap(frase => frase.split(" "));

console.log(resultado2);  // ["Olá", "mundo", "Aprendendo", "JavaScript"]