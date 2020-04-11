//A natureza dos objectos em javascript é dinamica
var pessoa = {};
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

console.log(pessoa);