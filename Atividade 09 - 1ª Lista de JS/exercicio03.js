function calcularSaldoAnual() {
    var ganhos = [];
    var gastos = [];
    
    // Solicita os ganhos e gastos para cada um dos 12 meses
    for (var i = 1; i <= 12; i++) {
        var ganhoMes = parseFloat(prompt("Digite o ganho bruto para o " + i + "° mês:"));
        ganhos.push(ganhoMes);
        
        var gastoMes = parseFloat(prompt("Digite o gasto para o " + i + "° mês:"));
        gastos.push(gastoMes);
    }
    
    // Calcula o ganho bruto anual
    var ganhoAnual = ganhos.reduce((total, ganho) => total + ganho, 0);
    
    // Calcula o gasto anual
    var gastoAnual = gastos.reduce((total, gasto) => total + gasto, 0);
    
    // Calcula o saldo financeiro
    var saldo = ganhoAnual - gastoAnual;
    
    // Verifica se teve lucro ou prejuízo
    var resultado = saldo >= 0 ? "lucro" : "prejuízo";
    
    // Exibe os resultados
    console.log("Ganho bruto anual: " + ganhoAnual);
    console.log("Gasto anual: " + gastoAnual);
    console.log("Saldo financeiro: " + saldo);
    console.log("A empresa teve " + resultado);
}

// Chamada da função para calcular o saldo anual
calcularSaldoAnual();
