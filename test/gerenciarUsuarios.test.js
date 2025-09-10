const { listarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funcionalidades de gerenciamento de usuários', function () {
  it('Deve ser capaz de adicionar um novo usuário a lista de usuários', function () {
    const novoUsuario = {
      nome: 'Jonas',
      email: 'jonas@email.com'
    };
    // 1. Adicionar um novo nome na lista de usuários
    adicionarNovoUsuario(novoUsuario);
    // 2. Retornar a lista de usuários na caixa listaDeUsuarios
    const listaDeUsuarios = listarUsuarios();
    console.log(listaDeUsuarios);
    // 3. Comparar se o novo nome está no fim da lista de usuários
    expect(listaDeUsuarios.at(-1).nome).to.equal('Jonas');
    expect(listaDeUsuarios.at(-1).email).to.equal('jonas@email.com');
    expect(listaDeUsuarios.at(-1)).to.eql({
      nome: 'Jonas',
      email: 'jonas@email.com'
    });
  });
});