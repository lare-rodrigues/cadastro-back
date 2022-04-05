const Usuario = require("../../src/Usuario/usuario");

const {
  validaNome,
  validaEmail,
  validaCPF,
  validaCEP,
  validaEndereco,
  validaCidade,
  validaEstado,
  validaNumero,
} = require("./usuario.mocks");

describe("Teste de Usuário", () => {
  describe("Validação de nome", () => {
    for (const { descricao, parametros, resultado, tipo } of validaNome()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de e-mail", () => {
    for (const { descricao, parametros, resultado, tipo } of validaEmail()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de CPF", () => {
    for (const { descricao, parametros, resultado, tipo } of validaCPF()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de CEP", () => {
    for (const { descricao, parametros, resultado, tipo } of validaCEP()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de Endereço", () => {
    for (const { descricao, parametros, resultado, tipo } of validaEndereco()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de Número", () => {
    for (const { descricao, parametros, resultado, tipo } of validaNumero()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de Cidade", () => {
    for (const { descricao, parametros, resultado, tipo } of validaCidade()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });

  describe("Validação de Estado", () => {
    for (const { descricao, parametros, resultado, tipo } of validaEstado()) {
      it(descricao, () => {
        if (tipo === "sucesso") {
          expect(new Usuario(parametros)).toEqual(resultado);
        }
        if (tipo === "excecao") {
          expect(() => new Usuario(parametros)).toThrow(resultado);
        }
      });
    }
  });
});
