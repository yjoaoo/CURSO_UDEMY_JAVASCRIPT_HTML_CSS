function numero_aleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = numero_aleatorio(-1, 10)
    console.log(`Opção escolhido foi ${opcao}`)
}

console.log("Até a próxima")