// condição ? valor_se_verdadeiro : valor_se_falso;

// Exemplo básico de operador ternário
let idade = 18;
let status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(status);  // 'Maior de idade'

// Usando operador ternário em uma função
function calcularPreco(preco) {
    return (preco > 100) ? preco * 0.9 : preco;
}

console.log(calcularPreco(120));  // 108 (com desconto de 10%)
console.log(calcularPreco(90));   // 90 (sem desconto)

// Encadeamento de operadores ternários para classificação de notas
let nota = 85;
let resultado = (nota >= 90) ? 'A' :
                (nota >= 80) ? 'B' :
                (nota >= 70) ? 'C' : 'F';

console.log(resultado);  // 'B'

// Comparação com if-else
let ativo = true;
let statusIfElse;

if (ativo) {
    statusIfElse = 'Usuário ativo';
} else {
    statusIfElse = 'Usuário inativo';
}

console.log(statusIfElse);  // 'Usuário ativo'

// Usando operador ternário para simplificar o if-else
let statusTernario = ativo ? 'Usuário ativo' : 'Usuário inativo';
console.log(statusTernario);  // 'Usuário ativo'
