// Par nome/valor

const saudacao = "Ola tudo bem?" // contexto lexico 1

function exemplo(){
    const saudacao = "Falaaa galera" // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "joao",
    idade: 19,
    peso: 62,
    endereco: {
        quadra: 202,
        numero: 12
    }
}

console.log(saudacao)
console.log(exemplo())
console.log(cliente)