function verificarLetra(letra) {
    // Converte a letra para minúscula para facilitar a comparação
    letra = letra.toLowerCase();
    
    // Verifica se a letra é uma vogal
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        console.log(letra + " é uma vogal.");
    } else if (letra >= 'a' && letra <= 'z') {
        console.log(letra + " é uma consoante.");
    } else {
        console.log("Por favor, insira uma letra do alfabeto.");
    }
}

// Solicita ao usuário para digitar uma letra
var letraDigitada = prompt("Digite uma letra do alfabeto:");

// Chama a função para verificar se a letra é vogal ou consoante
verificarLetra(letraDigitada);