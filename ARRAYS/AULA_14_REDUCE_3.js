/* O método reduce em JavaScript é utilizado para executar 
uma função em cada elemento do array, resultando em um único 
valor acumulado. Ele é poderoso para operações que precisam 
combinar todos os elementos do array em um só, como somas, 
produtos, concatenações, entre outros.*/

//----------- Soma de Elementos de um Array -----------

const numeros = [1, 2, 3, 4, 5]
const soma = numeros.reduce((acumulador, valor_atual) => {
    return acumulador + valor_atual
})

console.log(soma)
console.log("==========================")
/* Produto dos Elementos
Você pode usar o reduce para calcular o produto (multiplicação) de todos os elementos:*/

const numeros1 = [2, 3, 4];

const produto = numeros1.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1);

console.log(produto); // 24 (2 * 3 * 4)
console.log("==========================")

//----------- Soma de Elementos de um Array -----------

const palavras = ["Eu", "adoro", "programar"];

const frase = palavras.reduce((acumulador, palavraAtual) => `${acumulador} ${palavraAtual}`, "");

console.log(frase); 

console.log("==========================")

//----------- Contar Frequências de Elementos em um Array -----------

const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];

const contagemFrutas = frutas.reduce((acumulador, frutaAtual) => {
    if (!acumulador[frutaAtual]) {
        acumulador[frutaAtual] = 1;  // Se a fruta não estiver no acumulador, inicializa com 1
    } else {
        acumulador[frutaAtual]++;  // Se já estiver, incrementa a contagem
    }
    return acumulador;
}, {});

console.log(contagemFrutas); 
// { maçã: 3, banana: 2, laranja: 1 }
console.log("==========================")

//----------- Encontrar o Maior Valor -----------

const numeros3 = [10, 5, 8, 1, 20];

const maiorNumero = numeros3.reduce((acumulador, valorAtual) => {
    return (valorAtual > acumulador) ? valorAtual : acumulador;
}, numeros[0]);

console.log(maiorNumero);
console.log("==========================")

//----------- Somar Propriedades de Objetos -----------

const produtos = [
    { nome: 'Produto A', preco: 30 },
    { nome: 'Produto B', preco: 20 },
    { nome: 'Produto C', preco: 50 }
];

const totalPreco = produtos.reduce((acumulador, produtoAtual) => {
    return acumulador + produtoAtual.preco;
}, 0);

console.log(totalPreco); // 100