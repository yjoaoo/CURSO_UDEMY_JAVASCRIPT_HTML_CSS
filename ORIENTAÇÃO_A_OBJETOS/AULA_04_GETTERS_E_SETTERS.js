/* Getter: Um método que permite obter o valor de uma propriedade. 
É chamado como se fosse uma propriedade, sem precisar de parênteses. */

/* Setter: Um método que permite definir ou modificar o valor de uma propriedade. 
É chamado da mesma forma que o getter, mas permite que você execute alguma lógica 
antes de atribuir o valor. */

const pessoa = {
    primeiroNome: 'João',
    sobrenome: 'Silva',

    // Getter para obter o nome completo
    get nomeCompleto() {
        return `${this.primeiroNome} ${this.sobrenome}`;
    },

    // Setter para definir o nome completo
    set nomeCompleto(nome) {
        const partes = nome.split(' ');
        this.primeiroNome = partes[0];
        this.sobrenome = partes[1] || ''; // Lidar com casos onde apenas um nome é fornecido
    }
};

// Usando o getter
console.log(pessoa.nomeCompleto); // João Silva

// Usando o setter
pessoa.nomeCompleto = 'Maria Oliveira';
console.log(pessoa.primeiroNome); // Maria
console.log(pessoa.sobrenome); // Oliveira
console.log("==========================")
// --------------------------------------------------------------

// Exemplo de Validação com Setter

const Pessoa = {
    _idade: 0, // Propriedade privada

    get idade() {
        return this._idade;
    },

    set idade(valor) {
        if (valor < 0) {
            console.log('Idade não pode ser negativa.');
        } else {
            this._idade = valor;
        }
    }
};

// Usando o setter
Pessoa.idade = 25; // Define a idade
console.log(Pessoa.idade); // 25

Pessoa.idade = -5; // Tenta definir idade negativa
console.log(Pessoa.idade); // 25 (não foi alterado)




