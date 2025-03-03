// operador ... rest(juntar)/spread(espalhar)
/*Rest
O operador rest coleta valores e os coloca em um array.*/

function somar(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(somar(1, 2, 3, 4)); // Saída: 10
console.log(somar(5, 10)); // Saída: 15

/* Spread
O operador spread é usado para espalhar os valores de arrays ou objetos.*/ 

const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];

console.log(maisNumeros); // Saída: [1, 2, 3, 4, 5]

const pessoa = { nome: "João", idade: 20 };
const novaPessoa = { ...pessoa, cidade: "Brasília" };

console.log(novaPessoa); // Saída: { nome: "João", idade: 20, cidade: "Brasília" }

/*Usando ambos juntos
Um exemplo combinando rest e spread:*/

function organizar(primeiro, segundo, ...resto) {
    console.log("Primeiro:", primeiro);
    console.log("Segundo:", segundo);
    console.log("Resto:", resto);
}

const valores = [10, 20, 30, 40, 50];
organizar(...valores);
