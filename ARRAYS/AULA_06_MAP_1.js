/* O método map em JavaScript é uma das formas mais 
úteis de manipular arrays, pois permite aplicar uma 
função a cada elemento de um array e obter um novo 
array com os resultados dessa aplicação.*/

/* Estrutura básica de map:
const novoArray = arrayOriginal.map(callback); */

/* Aplicação Simples
Vamos dobrar os valores de um array: */

const numeros = [1, 2, 3, 4, 5]

const dobro = numeros.map(function(valor){
    return valor * 2 // retorna o valor dobrado
})

console.log(dobro)

console.log("==========================")

/* Exemplo 2: Usando Índices
Você pode usar o índice dentro da função callback: */

const nomes1 = ['Ana', 'Carlos', 'Maria'];

const nomesComIndice = nomes1.map(function(nome1, indice) {
    return `${indice + 1}) ${nome1}`;
});

console.log(nomesComIndice);

console.log("==========================")

/* Mapear objetos
Você também pode transformar arrays de objetos: */

const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 20 }
];

const nomes2 = pessoas.map(pessoa => pessoa.nome);

console.log(nomes2);