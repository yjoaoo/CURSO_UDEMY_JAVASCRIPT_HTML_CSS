const numeros = [1, 2, 3, 4, 5]

for(i in numeros){
    if (i == 2){
        break
    }
    console.log(`${i} = ${numeros[i]}`)
}

for(y in numeros){
    if(y == 2){
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}
console.log()

externo: for (a in numeros){
    for(b in numeros){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}