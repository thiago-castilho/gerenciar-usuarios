const usuarios = ['Carol', 'Thiago', 'Júlio', 'Judas'];

function listarUsuarios() {
  return usuarios;
}

function adicionarNovoUsuario(nome) {
  usuarios.push(nome);
}


module.exports = {
  listarUsuarios,
  adicionarNovoUsuario
}