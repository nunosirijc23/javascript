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

/*Quando queremos evitar que uma propriedade apareça a um loop, podemos definir pelo metodo 
difineProperty() da classe Ojbect, e usar o atributo enumerable como false para desabilitar 
e true para abilitarpor padrão o enumerable é true*/

Object.defineProperty(pessoa, "_idade", {
    enumerable: false //pode ser utilizado em propridade de dados e de acesso
});

/*Quando queremos desabilitar uma propriedade para que ela não seja configurada e para evitar 
que ela seja apagada usamos o atributo configurable e definimos ele como false*/
/*e existe outros atributos como 'value' que serve para atribuimos um valor a uma propridade, 
e o 'writable' que bloqueia para que o valor da propriedade não seja modificado*/

Object.defineProperty(pessoa, '_sexo', {
    configurable: false, //pode ser utilizado em propridade de dados e de acesso
    value: 'MASCULINO',  //só é usado em propriedade de dados
    writable: false //só é usado em propriedade de dados
});

delete pessoa._sexo;
pessoa._sexo = "Femenino";

/*E podemos verificar no proprio objecto se propriedade é enumeravel com o metodo
propertyIsEnumerable() */

console.log(pessoa.propertyIsEnumerable('_idade'));

for (propriedade in pessoa) {
    console.log(propriedade);
}

console.log('-------------------------------------------------------');

/*também podemos criar os propridade de acesso set e get como atributos, ou mesmo
da maneira não literal e quando o objecto já foi criado*/

Object.defineProperty(pessoa, 'sexo',{
    get: function() {
        return this._sexo;
    },
    set: function(value) {
        this._sexo = value;
    } 
});