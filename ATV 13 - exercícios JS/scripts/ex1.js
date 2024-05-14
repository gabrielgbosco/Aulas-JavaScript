function diferenca() {
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let resultado = a - b;
    console.log (`A diferença dos números é: ${resultado}.`);
    document.getElementById('mostrarDiferenca').innerHTML = (`A diferença dos números é: ${resultado}.`);
}

function calculoDeDobroETriplo() {
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let somaPrimeiraSegunda = a * 2 + b * 3;
    console.log (`A soma do dobro da primeira mais o triplo da segunda variável é igual a: ${somaPrimeiraSegunda}.`);
    document.getElementById('mostrarSomaPrimeiraSegunda').innerHTML = (`A soma do dobro da primeira mais o triplo da segunda variável é igual a: ${somaPrimeiraSegunda}.`);
}

function multiplicarVariaveis() {
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let multiplicacao = a * b;
    console.log (`A multiplicação das variáveis é igual a: ${multiplicacao}.`);
    document.getElementById('mostrarMultVariaveis').innerHTML = (`A multiplicação das variáveis é igual a: ${multiplicacao}.`);
}

function descobrirMaiorNumero() {
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let maiorNumero = a;
    let menorNumero = b;

    if (b > a) {
        maiorNumero = b;
        menorNumero = a;
    }

    console.log (`O maior número é: ${maiorNumero}. E o menor número é: ${menorNumero}.`);
    console.log (`Na ordem decrescente fica: ${maiorNumero}, ${menorNumero}.`);
    document.getElementById('mostrarOrdemDecrescente').innerHTML = (`O maior número é: ${maiorNumero}. E o menor número é: ${menorNumero}.`);
    document.getElementById('mostrarMaiorMenorNumero').innerHTML = (`Na ordem decrescente fica: ${maiorNumero}, ${menorNumero}.`);
}