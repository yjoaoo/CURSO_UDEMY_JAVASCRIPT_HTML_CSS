/* Exemplo com throw personalizado:
Você também pode lançar diferentes tipos de erros com base nas condições: */

function verificarIdade(idade) {
    if (idade < 18) {
        throw new Error("Menor de idade");  // Lança um erro se a idade for menor que 18
    } else if (idade > 120) {
        throw "Idade inválida";  // Lança um erro personalizado com uma string
    }
    return "Idade válida!";
}

try {
    console.log(verificarIdade(25));  // Executa normalmente
    console.log(verificarIdade(15));  // Lança erro
} catch (erro) {
    console.error("Erro capturado: " + erro);  // Exibe a mensagem de erro
}

try {
    console.log(verificarIdade(130));  // Lança erro personalizado
} catch (erro) {
    console.error("Erro capturado: " + erro);  // Exibe a mensagem de erro
}
