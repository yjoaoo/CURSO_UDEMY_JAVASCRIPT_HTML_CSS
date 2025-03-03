const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.0}',
    '{ "nome": "Lapis", "preco": 3.0}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const para_objeto = json => JSON.parse(json)
const apenas_preco = produto => produto.preco

const resultado = carrinho.map(para_objeto).map(apenas_preco)
console.log(resultado)
    
