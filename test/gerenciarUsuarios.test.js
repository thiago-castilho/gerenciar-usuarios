const { adicionarNovoUsuario, retornaListaDeUsuarios } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funcionalidades de gerenciamento de usuários', function () {

  it('Deve ser capaz de adicionar um novo usuário a lista de usuários', function () {
    const novoUser = {
      nome: "Didi",
      email: "didi@email.com"
    };

    // Adicionar novo usuário à lista de usuários
    adicionarNovoUsuario(novoUser);

    // Recuperar lista de usuários e guardar em uma variável
    const listaDeUsuariosAtualizada = retornaListaDeUsuarios();

    // Validar que o novo usuário foi adicionado na última posição da lista
    expect(listaDeUsuariosAtualizada.at(-1)).to.eql({
      nome: "Didi",
      email: "didi@email.com"
    });
    expect(listaDeUsuariosAtualizada.at(-1).nome).to.equal("Didi");
    expect(listaDeUsuariosAtualizada.at(-1).email).to.equal("didi@email.com");
  });
});