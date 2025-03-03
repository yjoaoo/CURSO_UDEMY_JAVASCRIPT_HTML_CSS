const peso_1 = 1.0;
const peso_2 = Number("2.0");

console.log(peso_1, peso_2);
console.log(Number.isInteger(peso_1)) // Pra saber se o valor é inteiro 'Number' é uma função
console.log(Number.isInteger(peso_2))

const avaliacao_1 = 9.871
const avaliacao_2 = 6.871

const total = avaliacao_1 * peso_1 + avaliacao_2 * peso_2
const media = total / (peso_1 + peso_2)

console.log(media.toFixed(2)) // tirando casas decimais desnecessarias
console.log(media.toString(2)) // valor binario
console.log(media.toString()) // valor original 
console.log(typeof media)

// ------------------------------ cuidados -------------------------------

console.log(7 / 0)
console.log("10" / 2); // 5


// ----------------------------------- METODO MATH -------------------------

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)
console.log(typeof Math)