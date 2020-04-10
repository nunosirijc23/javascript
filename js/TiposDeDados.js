//TIPOS PRIMITIVOS
var numero = 9;
var string = "";
var booleano = true;
var nula = null; //faz a referência a um objecto vazio
var indefinida = undefined;

//console.log(!!string); //verficar se a string está preenchida

//TIPO DE REFERÊNCIA
var pessoa = new Object();

var pessoa2 = {
    'nome': 'João',
    'idade': '20',
    'sexo': 'Masculino'
}

var mostarNome = new Function("console.log('Dela');");

var array = new Array('Nome', 'Idade', 'Sexo');

console.log(typeof pessoa) //verificar se pessoa é um objecto
mostarNome(); //executar a função mostrarNome
console.log(array);