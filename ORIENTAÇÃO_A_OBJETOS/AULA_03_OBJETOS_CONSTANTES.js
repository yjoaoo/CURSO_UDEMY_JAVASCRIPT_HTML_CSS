/* Em JavaScript, um objeto constante é um objeto que não pode ser reatribuído, 
ou seja, você não pode fazer uma nova atribuição a essa variável. No entanto, 
as propriedades do objeto ainda podem ser alteradas. Para declarar um objeto constante, 
usamos a palavra-chave const. */

const pessoa = {
    nome: "João",
    idade: 30
};

// Acessando propriedades
console.log(pessoa.nome); // João
console.log(pessoa.idade); // 30

// Alterando uma propriedade
pessoa.idade = 31;
console.log(pessoa.idade); // 31

// Adicionando uma nova propriedade
pessoa.profissao = "Desenvolvedor";
console.log(pessoa.profissao); // Desenvolvedor

// Tentando reatribuir o objeto (isso causará um erro)
// pessoa = {}; // Uncaught TypeError: Assignment to constant variable.

/* Se você quiser impedir completamente a modificação de um objeto, 
pode usar o método Object.freeze(), que torna um objeto imutável: */

const pessoaImutavel = Object.freeze({
    nome: "Maria",
    idade: 25
});

// Tentando alterar uma propriedade não terá efeito
pessoaImutavel.idade = 26;
console.log(pessoaImutavel.idade); // 25

