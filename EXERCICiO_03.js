// ------------------------ EXERCICIO 1 ------------------------

function valores(a, b){
    console.log(`Soma:`,a + b)
    console.log(`Subtração:`,a - b)
    console.log(`Multiplicação:`,a * b)
    console.log(`Divisão:`,(a /b).toFixed(2)) // limitar as casas decimais 
}

valores(3, 7)
valores(10, 38)

console.log("==========================")

// ------------------------ EXERCICIO 2 ------------------------

function classificar_triangulo(lado1, lado2, lado3){
    if (lado1 === lado2 && lado2 === lado3){
        return "Equilátero"
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(classificar_triangulo(3, 3, 3)); 
console.log(classificar_triangulo(3, 4, 3)); 
console.log(classificar_triangulo(3, 4, 5));

console.log("==========================")

// ------------------------ EXERCICIO 3 ------------------------

function elevar_expoente(base, expoente){
    return base ** expoente
}

console.log(elevar_expoente(2, 2))
console.log(elevar_expoente(3, 3))
console.log(elevar_expoente(5, 4))

console.log("==========================")

// ------------------------ EXERCICIO 4 ------------------------

function resto_divisao(dividendo, divisor){
    console.log(`Divisão:`, dividendo / divisor)
    console.log(`Resto da divisão: `, dividendo % divisor)
}

resto_divisao(2, 2)
resto_divisao(10, 50)

console.log("==========================")

// ------------------------ EXERCICIO 5 ------------------------

function formatar_dinheiro(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

console.log(formatar_dinheiro(1234.56)); 
console.log(formatar_dinheiro(10000)); 
console.log(formatar_dinheiro(0.30000000000000004));

