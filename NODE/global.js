// console.log(global)

globalThis.minhaApp = Object.freeze({ // usando o freeze o outro arquivo não sera mudado
    saudacao(){
        return"Estou aqui"
    },
    nome:"Sistema legal"
})