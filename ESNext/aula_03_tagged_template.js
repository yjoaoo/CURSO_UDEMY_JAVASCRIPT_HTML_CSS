/* 
Tagged Template Literals em JavaScript são usadas para processar 
template literals de uma maneira personalizada. Com elas, 
você pode manipular as strings e as expressões interpoladas antes que 
sejam combinadas em uma única string final.*/


function minhaTag(partes, ...valores) {
    return `Texto estático: ${partes} | Valores dinâmicos: ${valores}`;
}

const nome = "João";
const idade = 20;

const resultado = minhaTag`Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(resultado);