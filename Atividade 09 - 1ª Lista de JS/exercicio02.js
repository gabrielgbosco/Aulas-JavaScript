function iniciarContagemRegressiva(tempo) {
    var contador = tempo;

    var interval = setInterval(function () {
        console.log(contador);
        contador--;

        if (contador < 0) {
            clearInterval(interval);
            console.log('Lançamento iniciado!');
        }
    }, 1000);
}

console.log("VAMOS COMEÇAR A CONTAGEM REGRESSIVA!");
var x = parseInt(prompt("Digite o tempo, em segundos, da contagem regressiva:"))
iniciarContagemRegressiva(x);