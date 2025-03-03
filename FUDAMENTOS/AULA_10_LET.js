/* 
let e const respeitam o escopo de bloco, ou seja, 
uma variável declarada dentro de um bloco {} não pode ser acessada fora desse bloco.
*/

var numero = 1
{
    let numero = 2
    console.log(`Dentro =`, numero)
}

console.log(`fora =`, numero)