function calcularSalario() {
    let nomeFuncionario = document.getElementById('nomeFuncionario').value;
    let salario = parseFloat(document.getElementById('salarioFuncionario').value);

    console.log(`O nome do funcionário é ${nomeFuncionario}.`);
    console.log(`O seu salário bruto é de R$${salario.toFixed(2)}.`);
    let taxaDescontoINSS = 0;

    if (salario <= 1000) {
        taxaDescontoINSS = 0.08;
        console.log(`A taxa de desconto é de 8%.`);
        document.getElementById('mostrarTaxaDescontoINSS').innerHTML = (`A taxa de desconto é de 8%.`);
    } 
    
    if ((salario >= 1000.01) && (salario <= 1500)) {
        taxaDescontoINSS = 0.085;
        console.log(`A taxa de desconto é de 8,5%.`);
        document.getElementById('mostrarTaxaDescontoINSS').innerHTML = (`A taxa de desconto é de 8,5%.`);
    } 
    
    if (salario > 1500) {
        taxaDescontoINSS = 0.09;
        console.log(`A taxa de desconto é de 9%.`);
        document.getElementById('mostrarTaxaDescontoINSS').innerHTML = (`A taxa de desconto é de 9%.`);
    }

    let valorINSS = salario * taxaDescontoINSS;
    console.log(`O valor descontado pelo INSS é de R$${valorINSS.toFixed(2)}.`);
    let salarioLiquido = salario - valorINSS;
    console.log(`O seu salário líquido é de R$${salarioLiquido.toFixed(2)}.`);

    document.getElementById('mostrarNomeFuncionario').innerHTML = (`O nome do funcionário é ${nomeFuncionario}.`);
    document.getElementById('mostrarSalarioBruto').innerHTML = (`O seu salário bruto é de R$${salario.toFixed(2)}.`);
    document.getElementById('mostrarValorINSS').innerHTML = (`O valor descontado pelo INSS é de R$${valorINSS.toFixed(2)}.`);
    document.getElementById('mostrarSalarioLiquido').innerHTML = (`O seu salário líquido é de R$${salarioLiquido.toFixed(2)}.`);
}