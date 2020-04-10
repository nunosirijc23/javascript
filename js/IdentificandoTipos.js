var funcao = function() {
    return "true";
}

var verificar = (typeof funcao); //vai atribuir uma 'function' na variavel verificar 

if (verificar === "function") {
    console.log(funcao());
}
else {
    console.log("Não é uma função");
}

function showNome() {
    return 'Nuno';
}

if (showNome instanceof Function) { //vai verificar se showNome é uma função
    var nome = showNome();
}

console.log(nome);

var array = [];

if (Array.isArray(array)) { //a linha Array.isArray(adicionarParaVerificar) verifica se um array, se for retorna um true, senão false
    var verificado = true;
}
else {
    var verificado = false;
}

console.log(verificado)