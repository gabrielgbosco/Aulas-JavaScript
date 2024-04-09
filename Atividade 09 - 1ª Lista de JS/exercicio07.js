// Objeto com os preços dos sabores
var precos = {
    "Chocolate": 1.50,
    "Morango": 2.50,
    "Creme": 2.50,
    "Manga": 3.20,
    "Melancia": 3.40,
    "Vanilla Ice": 3.00,
    "Céu Azul": 3.60,
    "Brownie": 4.00,
    "Hawaiano": 5.00
};

// Função para obter o preço com base no sabor selecionado
function obterPreco(sabor) {
    // Converte o sabor para maiúsculas para facilitar a correspondência
    sabor = sabor.charAt(0).toUpperCase() + sabor.slice(1).toLowerCase();

    // Verifica se o sabor existe no objeto de preços
    if (precos.hasOwnProperty(sabor)) {
        return precos[sabor];
    } else {
        return "Sabor não encontrado.";
    }
}

// Exemplo de uso:
var saborSelecionado = prompt("Selecione o sabor do picolé (em minúsculas):");
var preco = obterPreco(saborSelecionado);
console.log("O preço do picolé de " + saborSelecionado + " é R$ " + preco.toFixed(2));
