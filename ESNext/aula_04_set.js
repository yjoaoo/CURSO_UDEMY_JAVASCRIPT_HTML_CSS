/* O Set em JavaScript é uma estrutura de dados que armazena valores únicos, 
ou seja, ele evita duplicatas automaticamente. É útil para manipular 
conjuntos de dados onde você não quer valores repetidos.*/

const numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(2); // Valor duplicado, será ignorado
console.log(numeros); 

// Adicionar valores (add)

const conjunto = new Set();
conjunto.add("a");
conjunto.add("b");
console.log(conjunto); 

// Verificar se um valor existe (has

console.log(conjunto.has("a")); 
console.log(conjunto.has("z")); 

// Remover valores (delete)

conjunto.delete("a");
console.log(conjunto); 

// Tamanho do Set (size)

console.log(conjunto.size); 

// Iterando sobre um Set

const frutas = new Set(["maçã", "banana", "laranja"]);
for (const fruta of frutas) {
    console.log(fruta);
}

// Removendo duplicatas de um array com Set

const numeros1 = [1, 2, 2, 3, 4, 4, 5];
const unicos = [...new Set(numeros1)];
console.log(unicos);