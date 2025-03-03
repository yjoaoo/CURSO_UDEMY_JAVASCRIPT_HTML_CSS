/* Herança
As classes em JavaScript suportam herança, permitindo 
que uma classe herde propriedades e métodos de outra. 
Isso é feito usando a palavra-chave extends.*/

class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }

    mostrarMarca() {
        console.log(`Marca: ${this.marca}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca); // Chama o construtor da classe pai
        this.modelo = modelo;
    }

    mostrarInfo() {
        console.log(`Carro: ${this.marca} ${this.modelo}`);
    }
}

const carro = new Carro('Ford', 'Mustang');
carro.mostrarInfo(); // Carro: Ford Mustang

