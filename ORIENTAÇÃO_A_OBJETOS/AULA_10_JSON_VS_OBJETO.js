/* ------------------------ Objeto JavaScript: ------------------------

É uma estrutura de dados que contém uma coleção de pares chave-valor. 
Um objeto pode incluir funções, outros objetos e vários tipos de dados 
(strings, números, arrays, etc.). */

const pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        console.log("Olá!");
    }
};
console.log(pessoa)
console.log()

/* ------------------------ JSON: ------------------------

É um formato de texto leve para troca de dados. Ele é usado principalmente 
para transmitir dados entre um servidor e um cliente.
O JSON é uma representação textual de um objeto JavaScript e tem algumas 
restrições em relação à forma como os dados são formatados.*/

/* {
    "nome": "João",
    "idade": 30
 } */

/* Para enviar ou receber JSON, é comum utilizar métodos para converter 
um objeto em uma string JSON e vice-versa:*/

/* Serialização: Converter um objeto JavaScript em uma string JSON usando JSON.stringify():*/

const objeto1 = { nome: "João", idade: 30 };
const jsonString1 = JSON.stringify(objeto1); // '{"nome":"João","idade":30}'

/* Desserialização: Converter uma string JSON em um objeto JavaScript usando JSON.parse(): */

const jsonString2 = '{"nome": "João", "idade": 30}';
const objeto2 = JSON.parse(jsonString2); // { nome: 'João', idade: 30 }

console.log(objeto1)
console.log(jsonString1)
console.log()
console.log(objeto2)
console.log(jsonString2)