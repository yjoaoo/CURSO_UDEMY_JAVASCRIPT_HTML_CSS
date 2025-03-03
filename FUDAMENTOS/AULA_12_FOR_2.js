// FOR com Var ----------------------------
// Loop com var: Como var tem escopo de função e não de bloco

const funcoes_1 = []

for (var i = 0; i < 10; i++) {
    funcoes_1.push(function() {
        console.log(i)
    });
}

funcoes_1[2]()
funcoes_1[8]()
console.log("---------------------------")
// FOR com Let ----------------------------
// let tem escopo de bloco, então cada função terá seu próprio valor de i.

const funcoes_2 = []

for (let i = 0; i < 10; i++){
    funcoes_2.push(function(){
            console.log(i)

    });
}

funcoes_2[2]()
funcoes_2[8]()
funcoes_2[6]()