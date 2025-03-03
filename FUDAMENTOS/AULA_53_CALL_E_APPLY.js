/* Diferença entre call e apply
A principal diferença está na forma como os argumentos são passados:
--- call: Os argumentos são passados individualmente (separados por vírgula).
--- apply: Os argumentos são passados como um array. */

const pessoa = {
    nome: "joao",
    idade: 19,
    apresentar: function(profissao){
        console.log(`Eu sou ${this.nome}, tenho ${this.idade} anos e sou ${profissao}.`)
    }
}
// Usando call
pessoa.apresentar.call({nome: "Carlos", idade: 25}, "engenheiro")
// Saída: Eu sou Carlos, tenho 25 anos e sou engenheiro.

// Usando apply
pessoa.apresentar.apply({nome: "Maria", idade: 28}, ["médica"]); 
// Saída: Eu sou Maria, tenho 28 anos e sou médica.

/* Quando usar call ou apply?
--- Use call quando você souber os argumentos que serão passados separadamente.
--- Use apply quando você tiver um array de argumentos que deseja passar para a função.
Ambos são muito úteis ao trabalhar com funções genéricas e heranças. */