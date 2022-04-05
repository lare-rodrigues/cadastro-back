const Usuario = require("../../src/Usuario/usuario");
// const Usuario = require("../../src/Usuario/usuario-correct");

const {
  nomeCurto,
  nomeVazio,
  sobrenomeCurto,
  sobrenomeVazio,
  semEmail,
  emailVazio,
  emailSemArroba,
  emailSemPonto,
  semCPF,
  CPFCurto,
  CPFInvalido,
  CPFLongo,
  CPFvazio,
} = require("./usuario.mocks");

describe("Teste de Usuário", () => {
  describe("Validação de nome", () => {
    it("Nome vazio", () => {
      const { parametros, resultado } = nomeVazio();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("Nome curto", () => {
      const { parametros, resultado } = nomeCurto();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("Sobrenome vazio", () => {
      const { parametros, resultado } = sobrenomeCurto();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("Sobrenome curto", () => {
      const { parametros, resultado } = sobrenomeVazio();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
  });

  describe("Validação de e-mail", () => {
    it("Sem e-mail", () => {
      const { parametros, resultado } = semEmail();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("E-mail vazio", () => {
      const { parametros, resultado } = emailVazio();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("E-mail sem @", () => {
      const { parametros, resultado } = emailSemArroba();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("E-mail sem .", () => {
      const { parametros, resultado } = emailSemPonto();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
  });

  describe("Validação de CPF", () => {
    it("Sem CPF", () => {
      const { parametros, resultado } = semCPF();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("CPF Vazio", () => {
      const { parametros, resultado } = CPFvazio();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("CPF Curto", () => {
      const { parametros, resultado } = CPFCurto();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("CPF Longo", () => {
      const { parametros, resultado } = CPFLongo();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    it("CPF Invalido", () => {
      const { parametros, resultado } = CPFInvalido();
      expect(() => new Usuario(parametros)).toThrow(resultado);
    });
    
  });
});
