const usuarios = [
  {
    nome: "Thiago",
    email: "thiago@email.com"
  },
  {
    nome: "Carol",
    email: "carol@email.com"
  },
  {
    nome: "Nil",
    email: "nil@email.com"
  },
  {
    nome: "Dalva",
    email: "dalva@email.com"
  }
];

function retornaListaDeUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(novoUsuario) {
  usuarios.push(novoUsuario);
}

module.exports = {
  retornaListaDeUsuarios,
  adicionarNovoUsuario
}