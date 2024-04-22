    var usuario = {
        nomeUsuario: "gabriel",
        senhaUsuario: "1234"
}

function fazerLogin() {
    var nome = (document.getElementById('nome-de-usuario').value);
    var senha = (document.getElementById('senha').value);
    var loginUsuario = {
        nome: nome,
        senha: senha
    }

    if (usuario.nomeUsuario == loginUsuario.nome && usuario.senhaUsuario == loginUsuario.senha) {
        location.replace("segundaTela.html")  // location.replace muda o arquivo que o usuário está.
    } else {
        alert("Usuário ou senha incorreto(s). Tente novamente.")
    }

}