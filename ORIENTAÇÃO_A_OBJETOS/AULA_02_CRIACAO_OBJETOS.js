/*Exemplo de Função Factory: 
Aqui está um exemplo de uma função factory que cria objetos de um carro:*/

function criarCarro(marca, modelo, ano) {
    return {
        marca: marca,
        modelo: modelo,
        ano: ano,
        detalhes: function() {
            return `${this.marca} ${this.modelo} (${this.ano})`;
        }
    };
}

const carro1 = criarCarro("Toyota", "Corolla", 2020);
const carro2 = criarCarro("Honda", "Civic", 2021);

console.log(carro1.detalhes()); // Toyota Corolla (2020)
console.log(carro2.detalhes()); // Honda Civic (2021)

// Uma função famosa que retorna um objeto...

const fromJSON = JSON.parse(`{"Info": "Sou um JSON"}`)
console.log(fromJSON.Info)