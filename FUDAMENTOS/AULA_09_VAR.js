/* Diferença de var com let e const
Se você usasse let ou const em vez de var, o comportamento seria diferente:
let e const respeitam o escopo de bloco, ou seja, 
uma variável declarada dentro de um bloco {} não pode ser acessada fora desse bloco.
*/

{
    {
        {
            {
                var sera = "Será!!!!"
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) ERRO: ReferenceError: local is not defined
console.log("------------------------------")
var numero = 1
{
    var numero = 2
    console.log(`Dentro =`, numero)
}

console.log(`Fora =`, numero)