//A natureza dos objectos em javascript é dinamica
var pessoa = {};
//propriedades de dados
pessoa.nome = 'Nuno Miguel Mvemba';
pessoa.idade = 21;
pessoa.sexo = 'Masculino';
pessoa.casado = true;

//comando para remover a propriedade de um objecto
delete pessoa.idade;

/*
//faz uma verificação se a propriedade pessoa.casado existe  
if (pessoa.casado) { // vai retornar um false porque a pessoa.casado foi declarado como false então não existe e nnão será eliminada
    delete pessoa.casado;
} */

//para verifcar a existência da propriedade acima de um jeito mais certo o 'in'
if ('casado' in pessoa) {//aqui vai verificar se a propriedade 'casado' existe no objecto pessoa 
    delete pessoa.casado;
}

//o outro jeito de verificar é:
console.log(pessoa.hasOwnProperty("casado"));

//o javascript armazena as propriedades de um objecto como se fosse um array e podemos verificar com um loop "for in"
/*for (propriedade in pessoa) { // a variavel propridade é declarada automaticamente
    console.log(propriedade);
}*/

//para pegar a propriedade é o valor da propriedade com o metodo "for in"
for (propriedade in pessoa) {
    console.log(propriedade);
    console.log(pessoa[propriedade]);
}

//o metodo keys da classe Ojecto lista todas as propriedades de um objecto em forma de array
//console.log(Object.keys(pessoa));
console.log("-------------------------------------------");
var pessoaArray = Object.keys(pessoa);

for (var i = 0; i < pessoaArray.length; i++) {
    console.log(pessoaArray[i]);
    console.log(pessoa[pessoaArray[i]]);
}

console.log("------------------------------------------");
//verificar se objecto é enumeravel
console.log(pessoa.propertyIsEnumerable("length"));