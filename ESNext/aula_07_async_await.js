/* O uso de async/await simplifica ainda mais o código, tornando-o 
mais legível e eliminando a necessidade de encadear métodos como 
then. Com async/await, é possível tratar Promises de maneira mais 
próxima a código síncrono.*/

const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = "";

            res.on("data", dados => {
                resultado += dados;
            });

            res.on("end", () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e) {
                    reject(e);
                }
            });
        }).on("error", err => {
            reject(err);
        });
    });
};

// Função assíncrona principal
const obterNomes = async () => {
    try {
        let nomes = [];

        const turmaA = await getTurma("A");
        nomes = nomes.concat(turmaA.map(a => `A: ${a.nome}`));

        const turmaB = await getTurma("B");
        nomes = nomes.concat(turmaB.map(a => `B: ${a.nome}`));

        const turmaC = await getTurma("C");
        nomes = nomes.concat(turmaC.map(a => `C: ${a.nome}`));

        console.log(nomes);
    } catch (error) {
        console.error("Erro:", error);
    }
};

// Executar a função

obterNomes();