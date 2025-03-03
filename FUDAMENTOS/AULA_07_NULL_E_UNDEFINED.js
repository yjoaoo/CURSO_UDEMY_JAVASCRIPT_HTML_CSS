let valor_1
console.log(valor_1)

valor_2 = null // ausencia de valor
console.log(valor_2)
// console.log(valor_2.toString()) // Erro !!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir indefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)