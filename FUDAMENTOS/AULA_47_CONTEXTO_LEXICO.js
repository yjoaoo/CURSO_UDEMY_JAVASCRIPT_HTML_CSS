/* O escopo léxico significa que o JavaScript determina o escopo 
das variáveis no momento em que o código é escrito, não no momento 
em que ele é executado. Ou seja, o escopo de uma variável é definido 
com base no local onde ela foi declarada no código fonte e não pelo 
local onde a função é chamada. */ 

function pai(){
    const nome = "joao" // Variável definida no escopo da função "pai"

    function filho(){
        console.log(nome) // Acessando a variável "nome" do escopo externo
    }

    filho()
}

pai()

/* No exemplo acima, a função filho tem acesso à variável nome, 
que foi declarada no escopo da função pai. Isso acontece porque o 
JavaScript utiliza o escopo léxico, o que significa que uma função 
pode acessar as variáveis do seu escopo externo no momento em que é declarada.*/


console.log("=============== EXEMPLO DO PROFESSOR =======================")

/* O conceito de escopo léxico é importante aqui. A função minha_funcao 
foi definida no escopo global, e ela sempre buscará a variável valor a 
partir do escopo em que foi criada (no caso, o global), ignorando o valor 
definido localmente dentro da função exec. */ 

const valor = "Global"

function minha_funcao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minha_funcao()
}

exec()
minha_funcao()