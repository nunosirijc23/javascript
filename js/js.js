class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Pumbler extends Pessoa {
    constructor (nome, idade, salario) {
        super(nome, idade);
        this.salario = salario;
    }
}

let canalizador = new Pumbler("Nuno", 20, 1000000);

console.log(canalizador.nome);
