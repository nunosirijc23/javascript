//Quando uma propridade de acesso utiliza uma propriedade de dados devemos usar "_" em frente
var pessoa =  {
    _nome: "Nuno Miguel Mvemba",
    _idade: 21,
    _sexo: "Masculino",

    get nome() {
        return this._nome;
    },

    set nome(value) {
        this._nome = value;
    },

    get idade() {
        return this._idade;
    },

    set idade(value) {
        this._idade = value;
    }
};

//atribuindo dados a propriedade de acesso set  
pessoa.nome = "NunoSirijc23";
pessoa.idade = 20;

console.log("Nome: "+pessoa.nome+" Idade: "+pessoa.idade);