const imprimir_resultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("Destaques!")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Nota inválida")
    }
}

imprimir_resultado(10)
imprimir_resultado(7)
imprimir_resultado(5)
imprimir_resultado(2.3)
imprimir_resultado(1000000)