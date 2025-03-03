// Usando 2 filters

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true},
    { nome: "Ipad pro", preco: 4199, fragil: false},
    { nome: "Copo de vidro", preco: 12.49, fragil: true},
    { nome: "Copo de plastico", preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const produto_caro = produto => produto.preco >= 500
const produto_fragil = produto => produto.fragil

console.log(produtos.filter(produto_caro).filter(produto_fragil))