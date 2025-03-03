// const fs = require("fs/promises")
// const path = require("path")
// const caminhoCompleto = path.resolve(__dirname, "dados.txt") // __dirname retorna o diretório atual do arquivo.
// const lerArquivo = async(caminho) => {
//     try{
//         const conteudo = await fs.readFile(caminho, "utf-8")

const { reject } = require("lodash");

        
//         console.log(conteudo)
//     } catch (erro){
//         console.log("Erro ao ler  o arquivo" + erro)
//     }
// }
// // lerArquivo("dados.txt")
// lerArquivo(caminhoCompleto)

// // --------------------------------------------------------------

// const produto = {
//     nome: "Camisa",
//     preco: 79.90
// }

// function buscarProduto(id) {
//     return new Promise((resolve, reject) => {
//         if (id < 0) {
//             reject("ERROR: ID do produto é inválido!"); 
//         } else {
//             setTimeout(() => {
//                 resolve(produto); 
//             },2000);
//         }
//     });
// }

// buscarProduto(1)
//     .then(produto => {
//         console.log(produto)
//     })
//     .catch(erro => {
//         console.log("Erro: ID do produto inválido!")
// })

// // --------------------------------------------------------------

// function processarPedido(nome, tempo) {
//     return new Promise((resolve, reject) => {
//         if(tempo <= 0){
//             reject("Tempo inválido para prepar o pedido")
//         } else {
//             setTimeout(() => {
//                 resolve(`Pedido de ${nome} pronto em ${tempo} segundos`)
//             },tempo * 1000)
//         }
//     })
// }

// processarPedido("Pizza", 3)
//     .then((mensagem) => console.log(mensagem))
//     .catch((erro) => console.log(erro))

// processarPedido("Salada", 2)
//     .then((mensagem) => console.log(mensagem))
//     .catch((erro) => console.log(erro));

// // --------------------------------------------------------------


// function baixarArquivo(nome, tempo) {
//     return new Promise((resolve, reject) => {
//         if(tempo <= 0){
//             reject("Tempo inválido para dowload")
//         } else {
//             setTimeout(() => {
//                 resolve(`O dowload: ${nome} foi concluído!`)
//             },tempo * 1000)  
//         }
//     })
// }

// baixarArquivo("Arquivo1", 3)
//     .then((mensagem) => console.log(mensagem))
//     .catch((erro) => console.log(erro))

// baixarArquivo("Arquivo2", 0)
//     .then((mensagem) => console.log(mensagem))
//     .catch((erro) => console.log(erro))

// baixarArquivo("Arquivo3", 5)
//     .then((mensagem) => console.log(mensagem))
//     .catch((erro) => console.log(erro))

// // --------------------------------------------------------------

// function verificarProduto(nome, estoque){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         if(estoque > 0){
//             resolve(`Produto disponível: ${nome}`)
//         } else {
//             reject(`O produto ${nome} não está disponível no estoque`)
//         }
//         },2000)
//     })
// }

// /* Promise.allSettled espera que todas as promessas sejam concluídas, 
// independentemente de serem resolvidas ou rejeitadas.*/

// Promise.allSettled([
//     verificarProduto("celular", 10),
//     verificarProduto("Notebook", 0)
// ])
//     .then(resultados => {
//         resultados.forEach(resultado => {
//             if(resultado.status === "fulfilled"){ //"fulfilled" para promessas resolvidas.
//                 console.log("Sucesso:", resultado.value)
//             } else {
//                 console.log("Erro:", resultado.reason) //"rejected" para promessas rejeitadas.
//             }
//         })
//     })



