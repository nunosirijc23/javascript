var pegarNome = function() {
    return this.nome;
}

var Pessoa = {
    nome: "Nuno Miguel Mvemba",
    idade: 21,
    sexo: "Masculino",
    getNome: pegarNome
}

var Carro = {
    nome: "Mustang",
    marca: "Ford",
    
    getNome() {
        return this.nome;
    },
    
    setNome(value) {
        this.nome = value.toUpperCase();
    }
}

Carro.setNome("PAulo");
Carro.getNome();