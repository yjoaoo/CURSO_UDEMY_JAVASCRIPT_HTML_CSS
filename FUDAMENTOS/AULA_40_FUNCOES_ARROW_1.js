let dobro = function(a){
    return 2 + a
}
console.log(dobro(2))

console.log("-------------------")

dobro = (a) => {
    return 2 * a
}
console.log(dobro(5))

console.log("-------------------")

dobro = a => 2 * a // return esta implicito
console.log(dobro(Math.PI))

console.log("-------------------")

let ola = function(){
    return "Olá"
}

ola = () => "Olá"

console.log(ola())


