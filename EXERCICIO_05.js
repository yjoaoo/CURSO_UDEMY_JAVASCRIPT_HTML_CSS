// ------------------------ EXERCICIO 1 ------------------------

function sistema_notas(notas){
    if (notas < 38){
        console.log("Você está reprovado!!!")
    } else {
        let multiplo_cinco = Math.ceil(notas / 5) * 5
        if (multiplo_cinco - notas < 3){
            notas = multiplo_cinco
        }
        console.log(`Você está aprovado com nota: ${notas}`)
    }
}

sistema_notas(30)
sistema_notas(38)
sistema_notas(84)
console.log("==========================")
// ------------------------ EXERCICIO 2 ------------------------

const imprimir_resultado = function(frutas){
    switch(frutas.toLowerCase()){ // Transforma a entrada para minúsculas
        case "maça":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.log("ERRO: resposta invalida")
    }
}

imprimir_resultado("maça")
imprimir_resultado("Kiwi")
imprimir_resultado("Melancia")
imprimir_resultado("Uva")