Array.prototype.map2 = function(callback){
    const new_array = []
    for (let i= 0; i < this.length; i++){
        new_array.push(callback(this[i], i))
    }
    return new_array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.0}',
    '{ "nome": "Lapis", "preco": 3.0}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const para_objeto = json => JSON.parse(json)
const apenas_preco = produto => produto.preco

const resultado = carrinho.map2(para_objeto).map2(apenas_preco)
console.log(resultado)