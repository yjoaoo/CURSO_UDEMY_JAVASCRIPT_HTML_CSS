/* CLOSURE é o escopo criado quando uma função é declarada
Esse escopo permite a função acessar e manipular variaveis externas á função */

function saudacao(nome) {
    const frase = "Olá, ";

    return function() {
        console.log(frase + nome);
    }
}

const saudarJoao = saudacao("João");
saudarJoao(); // Olá, João


