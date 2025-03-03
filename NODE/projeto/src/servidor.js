// acessar a pasta / arquivo = cd node || cd projeto
// Para sair de uma pasta = cd ..
// Para sair completamente do diretório atual e voltar para 
//      o diretório inicial (geralmente o diretório home ou raiz): cd ~
// Mostrar aqruivos = ls

const porta = 3003

const express = require(`express`)
const app = express()
const bodyParser = require("body-parser")
const bancoDeDados = require ("./bancoDeDados")

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}`)
})