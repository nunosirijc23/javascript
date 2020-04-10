//Função named ela pode ser usada antes da suas criação
imprimir("Função normal");

function imprimir(value) {
    console.log(value);
}

//função anonima ela só é usada depois da sua declaração
var imprimirAnonima = function(value) {
    console.log(value);
}

imprimirAnonima("Função anonima");

//quando colocamos argumentos em uma função ela posiciona eles como um array
var argumentosFuncao = function(nome, idade){
    console.log("Nome: "+arguments[0]+" Idade: "+arguments[1]);
}

argumentosFuncao("Nuno", 21);