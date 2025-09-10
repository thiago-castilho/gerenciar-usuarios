const usuarios = [
  {
    nome: 'Carol',
    email: 'carol@email.com'
  },
  {
    nome: 'Thiago',
    email: 'thiago@email.com'
  },
  {
    nome: 'Júlio',
    email: 'julio@email.com'
  },
  {
    nome: 'Judas',
    email: 'judas@email.com'
  }
];

function listarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(usuario) {
  usuarios.push(usuario);
}


module.exports = {
  listarUsuarios,
  adicionarNovoUsuario
}