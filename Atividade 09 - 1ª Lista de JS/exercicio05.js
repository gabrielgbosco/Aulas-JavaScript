function transformarNumero() {
    var numero = parseInt(prompt("Digite um número:"));
    
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
        return;
    }
    
    if (numero % 2 === 0) {
        console.log(numero + " é par. Transformando em ímpar: " + (numero + 1));
    } else {
        console.log(numero + " é ímpar. Transformando em par: " + (numero - 1));
    }
}

// Chamada da função para transformar o número
transformarNumero();