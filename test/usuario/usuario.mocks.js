const usuarioMock = {
  nome: "João",
  sobrenome: "Silva",
  email: "joaosilva@email.com",
  // cpf: "961.508.690-83",
  cpf: "96150869083",
  // cep: "27280-150",
  cep: "27280150",
  endereco: "Rua Dublim",
  numero: "386",
  cidade: "Piracicaba",
  estado: "SP",
};

module.exports = {
  validaNome() {
    return [
      {
        tipo: "excecao",
        descricao: "Nome Vazio",
        parametros: { ...usuarioMock, nome: undefined },
        resultado: "Nome inválido",
      },
      {
        tipo: "excecao",
        descricao: "Sobrenome Vazio",
        parametros: { ...usuarioMock, sobrenome: undefined },
        resultado: "Nome inválido",
      },
      {
        tipo: "excecao",
        descricao: "Nome Longo",
        parametros: {
          ...usuarioMock,
          nome: "João da silva figueiredo pereira neto almeida araujo campos de jesus lima",
          sobrenome: "Leite",
        },
        resultado: "Nome inválido",
      },
      {
        tipo: "excecao",
        descricao: "Sobrenome Longo",
        parametros: {
          ...usuarioMock,
          nome: "João",
          sobrenome:
            "da silva figueiredo pereira neto almeida araujo campos de jesus lima",
        },
        resultado: "Nome inválido",
      },
      {
        tipo: "excecao",
        descricao: "Nome Curto",
        parametros: {
          ...usuarioMock,
          nome: "Jo",
          sobrenome: "Silva",
        },
        resultado: "Nome inválido",
      },
      {
        tipo: "excecao",
        descricao: "Sobrenome Curto",
        parametros: {
          ...usuarioMock,
          nome: "João Ferreira Silva",
          sobrenome: "Cr",
        },
        resultado: "Nome inválido",
      },
      {
        tipo: "sucesso",
        descricao: "Nome Válido 01",
        parametros: {
          ...usuarioMock,
          nome: "João Ferreira",
          sobrenome: "Silva",
        },
        resultado: {
          ...usuarioMock,
          nome: "João Ferreira",
          sobrenome: "Silva",
        },
      },
      {
        tipo: "sucesso",
        descricao: "Nome Válido 02",
        parametros: {
          ...usuarioMock,
          nome: "Maria Da Silva",
          sobrenome: "Cruz",
        },
        resultado: {
          ...usuarioMock,
          nome: "Maria Da Silva",
          sobrenome: "Cruz",
        },
      },
    ];
  },
  validaEmail() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem E-mail",
        parametros: { ...usuarioMock, email: undefined },
        resultado: "E-mail inválido",
      },
      {
        tipo: "excecao",
        descricao: "E-mail Vazio",
        parametros: { ...usuarioMock, email: "" },
        resultado: "E-mail inválido",
      },
      {
        tipo: "excecao",
        descricao: "E-mail Sem @",
        parametros: { ...usuarioMock, email: "joaosilvaemail.com" },
        resultado: "E-mail inválido",
      },
      {
        tipo: "excecao",
        descricao: "E-mail Sem .",
        parametros: { ...usuarioMock, email: "joaosilva@emailcom" },
        resultado: "E-mail inválido",
      },
      {
        tipo: "sucesso",
        descricao: "E-mail Válido 01",
        parametros: { ...usuarioMock, email: "joaosilva@gmail.com" },
        resultado: { ...usuarioMock, email: "joaosilva@gmail.com" },
      },
      {
        tipo: "sucesso",
        descricao: "E-mail Válido 02",
        parametros: { ...usuarioMock, email: "marialsilva@hotmail.com" },
        resultado: { ...usuarioMock, email: "marialsilva@hotmail.com" },
      },
    ];
  },
  validaCPF() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem CPF",
        parametros: { ...usuarioMock, cpf: undefined },
        resultado: "CPF inválido",
      },
      {
        tipo: "excecao",
        descricao: "CPF Vazio",
        parametros: { ...usuarioMock, cpf: "" },
        resultado: "CPF inválido",
      },
      {
        tipo: "excecao",
        descricao: "CPF Curto",
        parametros: { ...usuarioMock, cpf: "9615086908" },
        resultado: "CPF inválido",
      },
      {
        tipo: "excecao",
        descricao: "CPF Longo",
        parametros: { ...usuarioMock, cpf: "961508690831" },
        resultado: "CPF inválido",
      },
      {
        tipo: "excecao",
        descricao: "CPF Inválido",
        parametros: { ...usuarioMock, cpf: "12312312312" },
        resultado: "CPF inválido",
      },
      {
        tipo: "sucesso",
        descricao: "CPF Válido 01",
        parametros: { ...usuarioMock, cpf: "25725938077" },
        resultado: { ...usuarioMock, cpf: "25725938077" },
      },
      {
        tipo: "sucesso",
        descricao: "CPF Válido 02",
        parametros: { ...usuarioMock, cpf: "72881376002" },
        resultado: { ...usuarioMock, cpf: "72881376002" },
      },
    ];
  },
  validaCEP() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem CEP",
        parametros: { ...usuarioMock, cep: undefined },
        resultado: "CEP inválido",
      },
      {
        tipo: "excecao",
        descricao: "CEP Vazio",
        parametros: { ...usuarioMock, cep: "" },
        resultado: "CEP inválido",
      },
      {
        tipo: "excecao",
        descricao: "CEP curto",
        parametros: { ...usuarioMock, cep: "2728015" },
        resultado: "CEP inválido",
      },
      {
        tipo: "excecao",
        descricao: "CEP Longo",
        parametros: { ...usuarioMock, cep: "272801501" },
        resultado: "CEP inválido",
      },
      {
        tipo: "excecao",
        descricao: "CEP Com Letras",
        parametros: { ...usuarioMock, cep: "272a0150" },
        resultado: "CEP inválido",
      },
      {
        tipo: "sucesso",
        descricao: "CEP Válido 01",
        parametros: { ...usuarioMock, cep: "27280150" },
        resultado: { ...usuarioMock, cep: "27280150" },
      },
      {
        tipo: "sucesso",
        descricao: "CEP Válido 02",
        parametros: { ...usuarioMock, cep: "27280151" },
        resultado: { ...usuarioMock, cep: "27280151" },
      },
    ];
  },
  validaEndereco() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem Endereco",
        parametros: { ...usuarioMock, endereco: undefined },
        resultado: "Endereço inválido",
      },
      {
        tipo: "excecao",
        descricao: "Endereço Vazio",
        parametros: { ...usuarioMock, endereco: "" },
        resultado: "Endereço inválido",
      },
      {
        tipo: "sucesso",
        descricao: "Endereço Válido 01",
        parametros: { ...usuarioMock, endereco: "Avenida Paulista" },
        resultado: { ...usuarioMock, endereco: "Avenida Paulista" },
      },
      {
        tipo: "sucesso",
        descricao: "Endereço Válido 02",
        parametros: { ...usuarioMock, endereco: "Morro Velho" },
        resultado: { ...usuarioMock, endereco: "Morro Velho" },
      },
    ];
  },
  validaNumero() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem Número",
        parametros: { ...usuarioMock, numero: undefined },
        resultado: "Número inválido",
      },
      {
        tipo: "excecao",
        descricao: "Número Vazio",
        parametros: { ...usuarioMock, numero: "" },
        resultado: "Número inválido",
      },
      {
        tipo: "sucesso",
        descricao: "Número Válido 01",
        parametros: { ...usuarioMock, numero: 10 },
        resultado: { ...usuarioMock, numero: 10 },
      },
      {
        tipo: "sucesso",
        descricao: "Número Válido 02",
        parametros: { ...usuarioMock, numero: "101a" },
        resultado: { ...usuarioMock, numero: "101a" },
      },
    ];
  },
  validaCidade() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem Cidade",
        parametros: { ...usuarioMock, cidade: undefined },
        resultado: "Cidade inválido",
      },
      {
        tipo: "excecao",
        descricao: "Cidade Vazia",
        parametros: { ...usuarioMock, cidade: undefined },
        resultado: "Cidade inválido",
      },
      {
        tipo: "sucesso",
        descricao: "Cidade Válido 01",
        parametros: { ...usuarioMock, cidade: "São Paulo" },
        resultado: { ...usuarioMock, cidade: "São Paulo" },
      },
      {
        tipo: "sucesso",
        descricao: "Cidade Válido 02",
        parametros: { ...usuarioMock, cidade: "Rio de Janeiro" },
        resultado: { ...usuarioMock, cidade: "Rio de Janeiro" },
      },
    ];
  },
  validaEstado() {
    return [
      {
        tipo: "excecao",
        descricao: "Sem Estado",
        parametros: { ...usuarioMock, estado: undefined },
        resultado: "Estado inválido",
      },
      {
        tipo: "excecao",
        descricao: "Estado Vazio",
        parametros: { ...usuarioMock, estado: "" },
        resultado: "Estado inválido",
      },
      {
        tipo: "excecao",
        descricao: "Estado Inexistente",
        parametros: { ...usuarioMock, estado: "SPO" },
        resultado: "Estado inválido",
      },
      {
        tipo: "sucesso",
        descricao: "Estado Válido 01",
        parametros: { ...usuarioMock, estado: "SP" },
        resultado: { ...usuarioMock, estado: "SP" },
      },
      {
        tipo: "sucesso",
        descricao: "Estado Válido 02",
        parametros: { ...usuarioMock, estado: "RJ" },
        resultado: { ...usuarioMock, estado: "RJ" },
      },
    ];
  },
};
