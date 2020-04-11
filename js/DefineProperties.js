/*Criando o objecto e definindo as propriedades de dados e de acesso, atracés do metodo
 defineProperties() da classe Object*/

 var pessoa = {};

 Object.defineProperties(pessoa,{
    _nome: {
        value: 'Nuno Miguel Mvemba',
        configurable: false,
        enumerable: true,
        writable: false 
    },

    _idade:{
        value: 21,
        configurable: false,
        enumerable: true,
        writable: true 
    },

    _sexo: {
        value: 'Masculino',
        configurable: false,
        enumerable: true,
        writable: true 
    },

    nome: {
        get: function() {
            return this._nome;
        }
    },

    idade: {
        get: function() {
            return this._idade;
        },

        set: function(value) {
            this._idade = value;
        }
    },

    sexo: {
        get: function() {
            return this._sexo;
        }
    }

 });

/*Podemos acessar a propridade de dados para ver os seus atributos com o metodo 
getOwnPropertyDescriptor() da classe Object, e como parametro (nomeDoOjecto, 
'_propriedadeDeDados')*/

console.log(Object.getOwnPropertyDescriptor(pessoa, "_nome").enumerable);
 

/*existe tres metodos da classe Object para proteger que haja alterções no objecto:
    - preventExtensions(): para evitar que seja criadas propridades no objecto depois de ele ser criado
Para verificar se o objecto é extensivel é usar o metodo isExtensible() dd classe Object

    - seal(): para evitar que seja criadas propridades no objecto depois de ele ser criado
Para verificar se o objecto é extensivel é usar o metodo isSealed() dd classe Object

    - freeze(): para evitar que seja criadas propridades no objecto depois de ele ser criado
Para verificar se o objecto é extensivel é usar o metodo isFrozen() dd classe Object*/

Object.preventExtensions(pessoa);
Object.seal(pessoa);
Object.freeze(pessoa);

pessoa._altura = "1,80 m";
delete pessoa._nome;

console.log(Object.isExtensible(pessoa));
console.log(Object.isSealed(pessoa));
console.log(Object.isFrozen(pessoa));