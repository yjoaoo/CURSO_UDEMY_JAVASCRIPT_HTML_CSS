/* ----- Programação Imperativa -----
Na programação imperativa, você dá instruções detalhadas 
sobre como realizar as operações. Esse estilo foca no passo 
a passo de como o problema será resolvido, manipulando 
diretamente o estado do programa.*/

const numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);  // Resultado: 15
console.log("==========================")

/* ----- Programação Declarativa ----- 
Na programação declarativa, você foca mais no o que deve ser feito, 
sem especificar os detalhes do processo ou como será executado. 
O fluxo de controle e os detalhes de implementação ficam "escondidos" no sistema.*/

const numeros1 = [1, 2, 3, 4, 5];
const soma2 = numeros1.reduce((acumulador, atual) => acumulador + atual);

console.log(soma2);  // Resultado: 15