let a = parseInt(document.getElementById('numeroA').value);
let b = parseInt(document.getElementById('numeroB').value);

function diferenca() {
    let resultado = a - b;
    console.log (`A diferença dos números é: ${resultado}.`);
}

function calculoDeDobroETriplo() {
    let somaPrimeiraSegunda = a * 2 + b * 3;
    console.log (`A soma do dobro da primeira mais o triplo da segunda variável é igual a: ${somaPrimeiraSegunda}.`);
}

function multiplicarVariaveis() {
    let multiplicacao = a * b;
    console.log (`A multiplicação das variáveis é igual a: ${multiplicacao}.`);
}

function descobrirMaiorNumero() {
    let maiorNumero = a;
    let menorNumero = b;

    if (b > a) {
        maiorNumero = b;
        menorNumero = a;
    }

    console.log (`O maior número é: ${maiorNumero}. E o menor número é: ${menorNumero}.`);
    console.log (`Na ordem decrescente fica: ${maiorNumero}, ${menorNumero}.`);
}