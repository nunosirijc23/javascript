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

<<<<<<< HEAD
let canalizador = new Pumbler("Nuno", 20, 1000000);
let canalizador = new Pumbler("Josemar", 12, 0);

=======
let canalizador = new Pumbler("Nuno", 21, 1000000);
let canalizador = new Pumbler("João", 14, 000);
>>>>>>> teste
console.log(canalizador.nome);
