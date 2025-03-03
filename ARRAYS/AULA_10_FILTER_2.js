// Diferença entre filter, map e forEach:

/* filter: Retorna um novo array contendo 
apenas os elementos que passam em um teste (condição). */

const numeros1 = [1, 2, 3, 4, 5];
const pares = numeros1.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]

/* map: Aplica uma transformação a cada 
elemento do array e retorna um novo array com esses 
elementos transformados.*/

const numeros2 = [1, 2, 3];
const dobro = numeros2.map(num => num * 2);
console.log(dobro); // [2, 4, 6]

/* forEach: Executa uma função em cada elemento do array, 
mas não retorna um novo array.*/ 

const numeros3 = [1, 2, 3];
numeros3.forEach(num => console.log(num * 2)); // Imprime 2, 4, 6, mas não retorna um novo array