const imprimir_resultado = function(nota){
    if(nota >= 7) {
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

imprimir_resultado(6)
imprimir_resultado(8)
imprimir_resultado("AEEE") // cuidado 