function calcularSalario() {
    let nomeFuncionario = document.getElementById('nome').value;
    let salario = parseFloat(document.getElementById('salarioFuncionario').value);
    let taxaDescontoINSS = 0.08;

    console.log(`O nome do funcionário é ${nomeFuncionario}.`);
    console.log(`O seu salário bruto é de R$${salario}.`);
    let valorINSS = salario * taxaDescontoINSS;
    console.log(`O valor descontado pelo INSS é de R$${valorINSS}.`);
    let salarioLiquido = salario - valorINSS;
    console.log(`O seu salário líquido é de R$${salarioLiquido}.`);

    document.getElementById('mostrarNomeFuncionario').innerHTML = (`O nome do funcionário é ${nomeFuncionario}.`);
    document.getElementById('mostrarSalarioBruto').innerHTML = (`O seu salário bruto é de R$${salario}.`);
    document.getElementById('mostrarValorINSS').innerHTML = (`O valor descontado pelo INSS é de R$${valorINSS}.`);
    document.getElementById('mostrarSalarioLiquido').innerHTML = (`O seu salário líquido é de R$${salarioLiquido}.`);
}