/* Definindo uma Classe
Você pode definir uma classe usando a palavra-chave class, 
seguida pelo nome da classe. Dentro da classe, você pode definir 
um método especial chamado constructor, que é chamado quando uma nova 
instância da classe é criada.*/

class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo}`);
    }
}

/* Criando Instâncias
Você pode criar instâncias (ou objetos) da classe usando a palavra-chave new.*/

const carro1 = new Carro('Toyota', 'Corolla');
const carro2 = new Carro('Honda', 'Civic');

carro1.mostrarInfo(); // Carro: Toyota Corolla
carro2.mostrarInfo(); // Carro: Honda Civic
