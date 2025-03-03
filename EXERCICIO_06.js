// ------------------------ EXERCICIO 1 ------------------------

function calcular_idade(data_nascimento){
    const hoje = new Date()
    const nascimento = new Date(data_nascimento)
    
    const diferenca_tempo = hoje - nascimento

    const diferenca_dias = Math.floor(diferenca_tempo / (100 * 60 * 60 * 24))

    return diferenca_dias
}

const data_nascimento = 2004-25-10
const idade_em_dias = calcular_idade(data_nascimento)
console.log(`A idade em dias é: ${idade_em_dias}`)
console.log("==========================")


// ------------------------ EXERCICIO 2 ------------------------

function horas_trabalhadas(horas, salario){
    console.log(`Salário igual a R$ ${horas * salario}`)
}

horas_trabalhadas(150, 40.5)
console.log("==========================")

// ------------------------ EXERCICIO 2 ------------------------

function nome_mes(mes) {
    if (mes == 1) {
        console.log("Janeiro");
    } else if (mes == 2) {
        console.log("Fevereiro");
    } else if (mes == 3) {
        console.log("Março");
    } else if (mes == 4) {
        console.log("Abril");
    } else if (mes == 5) {
        console.log("Maio");
    } else if (mes == 6) {
        console.log("Junho");
    } else if (mes == 7) {
        console.log("Julho");
    } else if (mes == 8) {
        console.log("Agosto");
    } else if (mes == 9) {
        console.log("Setembro");
    } else if (mes == 10) {
        console.log("Outubro");
    } else if (mes == 11) {
        console.log("Novembro");
    } else if (mes == 12) {
        console.log("Dezembro");
    } else {
        console.log("Mês inválido");
    }
}

nome_mes(1);  
nome_mes(5);  
nome_mes(13); 
console.log("==========================")


// ------------------------ EXERCICIO 3 ------------------------


function maior_ou_igual(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`${numero1} é maior que ${numero2}`);
    } else if (numero1 < numero2) {
        console.log(`${numero1} é menor que ${numero2}`);
    } else {
        console.log(`${numero1} é igual a ${numero2}`);
    }
}

maior_ou_igual(5, 9);  
maior_ou_igual(9, 5);  
maior_ou_igual(5, 5);  