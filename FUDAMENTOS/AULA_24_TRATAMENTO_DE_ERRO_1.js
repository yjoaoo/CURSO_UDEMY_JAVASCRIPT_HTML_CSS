/* 1) try: Usado para definir um bloco de código que será "tentado" (executado).
   2) catch: Executado se ocorrer um erro no bloco try. 
      Ele captura o erro e permite que você lide com ele.
   3) throw: Permite lançar um erro personalizado. 
      Ele pode ser usado para lançar exceções que serão capturadas no bloco catch. */

// ESTRUTURA BASICA

try {
// Código que pode gerar um erro
} catch (erro) {
// Código para lidar com o erro
}

/* throw:
Você pode usar throw para criar seus próprios erros personalizados: */

throw "Algo deu errado!";  // Lança uma string
throw 42;                  // Lança um número
throw new Error("Erro personalizado");  // Lança um objeto de erro

console.log("--------------------------")

/* Exemplo básico:
Vamos ver um exemplo completo que mostra como usar try, catch e throw: */

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não permitida!");  // Lançando um erro
    }
    return a / b;
}

try {
    console.log(dividir(10, 2));  // Executa normalmente
    console.log(dividir(10, 0));  // Aqui vai lançar um erro
} catch (erro) {
    console.error("Erro capturado: " + erro.message);  // Tratando o erro
}

console.log("Continua a execução do código...");

/* Explicação do exemplo:
A função dividir(a, b) verifica se b é igual a zero. Se for, um erro é lançado usando throw new Error().
O bloco try executa a função dividir. Quando o denominador é zero, um erro é lançado, e o controle é passado para o bloco catch.
O bloco catch captura o erro e exibe a mensagem de erro.
A execução do código continua mesmo após o erro, graças ao tratamento de exceção. */