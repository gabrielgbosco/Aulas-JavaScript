function ordenarDecrescente(a, b) {
    return b - a;
}

function ordenarValoresDecrescente() {
    var valores = [];
    
    // Solicita ao usuário os 4 valores inteiros
    for (var i = 1; i <= 4; i++) {
        var valor = parseInt(prompt("Digite o " + i + "º valor inteiro:"));
        valores.push(valor);
    }
    
    // Ordena os valores em ordem decrescente
    valores.sort(ordenarDecrescente);
    
    // Exibe os valores em ordem decrescente
    console.log("Valores em ordem decrescente:");
    for (var i = 0; i < valores.length; i++) {
        console.log(valores[i]);
    }
}

// Chamada da função para ordenar os valores em ordem decrescente
ordenarValoresDecrescente();