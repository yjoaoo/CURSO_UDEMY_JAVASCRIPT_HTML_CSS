/* Uma Promise em JavaScript é usada para lidar com operações assíncronas. 
É como uma "promessa" de que algo será concluído no futuro, 
podendo ser resolvido com sucesso ou rejeitado devido a um erro. */

// Função que retorna uma Promise
function esperarPor(segundos) {
    return new Promise((resolve, reject) => {
        if (segundos <= 0) {
            reject("O tempo deve ser maior que 0 segundos!"); // Rejeita se o tempo for inválido
        } else {
            setTimeout(() => {
                resolve(`Esperei por ${segundos} segundos`); // Resolve após o tempo
            }, segundos * 1000);
        }
    });
}

// Consumindo a Promise com .then e .catch
console.log("Usando .then e .catch:");
esperarPor(2)
    .then((mensagem) => {
        console.log(mensagem); 
        return esperarPor(1); // Encadeando outra Promise
    })
    .then((mensagem) => {
        console.log(mensagem); 
    })
    .catch((erro) => {
        console.log("Erro:", erro);
    });

// Consumindo a Promise com async/await
console.log("\nUsando async/await:");
async function executar() {
    try {
        const mensagem1 = await esperarPor(2);
        console.log(mensagem1); 

        const mensagem2 = await esperarPor(1);
        console.log(mensagem2); 
    } catch (erro) {
        console.log("Erro:", erro);
    }
}

executar();

