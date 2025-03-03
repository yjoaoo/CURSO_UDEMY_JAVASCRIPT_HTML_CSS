let contador = 1
while(contador <= 5){
    console.log(`Contador = ${contador}`)
    contador ++
}

console.log()

for(let i = 1; i <= 5; i++){
    console.log(`i = ${i}`)
}

console.log()
console.log("-------------- EXEMPLO COM ARRAYS ---------------")

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let a = 0; a < notas.length; a++){
    console.log(`notas = ${notas[a]}`)
}
