function so_boa_nota(nota) {
    if(nota >= 7){
        console.log(`Aprovado com ` + nota)
    } else {
        console.log(`Reprovado com ` + nota)
    }
}
console.log("-------------------------------")
so_boa_nota(8.1)
so_boa_nota(6.1)

function se_for_verdade(valor){
    if (valor){
        console.log(`é verdade... `+ valor)
    }
}

se_for_verdade()
se_for_verdade(null)
se_for_verdade(undefined)
se_for_verdade(NaN)
se_for_verdade("")
se_for_verdade(0)
se_for_verdade(-1)
se_for_verdade(" ")
se_for_verdade("?")
se_for_verdade([])
se_for_verdade([1, 2])
se_for_verdade({})

console.log("--------------- IF 2 -------------------------")

function teste_1(numero){
    if(numero > 7)
       console.log(numero)
    console.log("Final")
}

teste_1(6)
teste_1(8)

console.log()

function teste_2(numero_2){
    if(numero_2 > 7); {
        console.log(numero_2)
    }
}

teste_2(6)
teste_2(8)