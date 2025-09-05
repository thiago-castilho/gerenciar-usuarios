const { listarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funcionalidades de gerenciamento de usuários', function () {
  it('Deve ser capaz de adicionar um novo usuário a lista de usuários', function () {
    const novoNome = 'Jonas';
    // 1. Adicionar um novo nome na lista de usuários
    adicionarNovoUsuario(novoNome);
    // 2. Retornar a lista de usuários na caixa listaDeUsuarios
    const listaDeUsuarios = listarUsuarios();
    console.log(listaDeUsuarios);
    // 3. Comparar se o novo nome está no fim da lista de usuários
    expect(listaDeUsuarios.at(-1)).to.equal(novoNome);
  });
});