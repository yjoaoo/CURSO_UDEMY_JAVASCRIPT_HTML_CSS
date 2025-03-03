// ------------------------ EXERCICIO 1 ------------------------

function taxa_e_tempo(capital, taxa, tempo){
    let juros_simples = capital * taxa * tempo
    let m = capital + juros_simples
    console.log(`O montante dessa aplicação é: ${m.toFixed(2)}`)
}


function compostos(capital, taxa, tempo){
    let montante = capital * Math.pow((1 + taxa), tempo)
    console.log(`O montante dessa aplicação com juros compostos é: R$ ${montante.toFixed(2)}`)
}


taxa_e_tempo(1000, 0.05, 2)
compostos(1000, 0.05, 2)

console.log("==========================")

// ------------------------ EXERCICIO 2 ------------------------

function formula_de_bhaskara(ax2, bx, c){
    let delta = Math.pow(bx, 2) - (4 * ax2 * c) // Isso calcula bx² (bx elevado ao quadrado)

    if (delta < 0){
        return "Delta é negativo"
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2) // Isso calcula a raiz quadrada de delta
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2) // Isso calcula a raiz quadrada de delta
        return [x1, x2]
    }
}

console.log(formula_de_bhaskara(3, -5, 12)); // Delta negativo
console.log(formula_de_bhaskara(1, -3, 2));  // Exemplo com raízes reais

console.log("==========================")

// ------------------------ EXERCICIO 3 ------------------------
// exercico 8 


function verifica_pontuacoes(pontuacoes) {
    if (!pontuacoes || pontuacoes.length === 0) {
        console.log("Erro: O array de pontuações está vazio ou indefinido.");
        return;
    }

    let recorde = pontuacoes[0];  
    let piorJogo = 0;
    let vezesRecorde = 0;

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > recorde) {
            recorde = pontuacoes[i]; 
            vezesRecorde++;  
        }

        if (pontuacoes[i] < pontuacoes[piorJogo]) {
            piorJogo = i; 
        }
    }

    return [vezesRecorde, piorJogo + 1]; 
}

const pontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1];
console.log(verifica_pontuacoes(pontuacoes));





