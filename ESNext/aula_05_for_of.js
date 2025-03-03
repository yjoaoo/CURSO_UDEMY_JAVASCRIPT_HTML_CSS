/* O for...of é uma estrutura de repetição em JavaScript 
que permite iterar sobre valores de objetos iteráveis, 
como arrays, strings, Maps, Sets e outros. */

// Array
const numeros = [10, 20, 30];
console.log("Array:");
for (const numero of numeros) {
    console.log(numero); // Saída: 10, 20, 30
}

// String
const palavra = "JavaScript";
console.log("\nString:");
for (const letra of palavra) {
    console.log(letra); // Saída: J, a, v, a, S, c, r, i, p, t
}

// Set
const conjunto = new Set([1, 2, 3]);
console.log("\nSet:");
for (const valor of conjunto) {
    console.log(valor); // Saída: 1, 2, 3
}

// Map
const mapa = new Map([
    ["nome", "João"],
    ["idade", 20],
    ["cidade", "Brasília"],
]);
console.log("\nMap:");
for (const [chave, valor] of mapa) {
    console.log(`${chave}: ${valor}`); 
    // Saída: nome: João, idade: 20, cidade: Brasília
}
