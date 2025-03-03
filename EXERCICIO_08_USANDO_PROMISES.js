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

let nomes = [];
getTurma("A")
    .then(alunos => {
        nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
        return getTurma("B");
    })
    .then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
        return getTurma("C");
    })
    .then(alunos => {
        nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
        console.log(nomes);
    })
    .catch(error => {
        console.error("Erro:", error);
    });


Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma("D").catch(e => console.log(e.message))