const _ = require("lodash");

// Definindo a função set_intervalo
const set_intervalo = (callback, interval) => {
    setInterval(callback, interval);
};

// Usando a função com uma arrow function que imprime um número aleatório
set_intervalo(() => console.log(_.random(1, 10)), 2000);

// Nodemon instalado !!!
// Para usar = nodemon usando_modulos_terceiros.js (nome do arquivo)