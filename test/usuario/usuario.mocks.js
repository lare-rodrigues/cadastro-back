module.exports = {
  nomeVazio() {
    const parametros = {};
    const resultado = "Nome inválido";
    return { parametros, resultado };
  },
  sobrenomeVazio() {
    const parametros = { nome: "João" };
    const resultado = "Nome inválido";
    return { parametros, resultado };
  },
  nomeCurto() {
    const parametros = { nome: "Jo", sobrenome: "Silva" };
    const resultado = "Nome inválido";
    return { parametros, resultado };
  },
  sobrenomeCurto() {
    const parametros = { nome: "João Ferreira Silva", sobrenome: "Cr" };
    const resultado = "Nome inválido";
    return { parametros, resultado };
  },
  semEmail() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
    };
    const resultado = "E-mail inválido";
    return { parametros, resultado };
  },
  emailVazio() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "",
    };
    const resultado = "E-mail inválido";
    return { parametros, resultado };
  },
  emailSemArroba() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilvaemail.com",
    };
    const resultado = "E-mail inválido";
    return { parametros, resultado };
  },
  emailSemPonto() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@emailcom",
    };
    const resultado = "E-mail inválido";
    return { parametros, resultado };
  },
  semCPF() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@email.com",
    };
    const resultado = "CPF inválido";
    return { parametros, resultado };
  },
  CPFvazio() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@email.com",
      cpf: "",
    };
    const resultado = "CPF inválido";
    return { parametros, resultado };
  },
  CPFCurto() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@email.com",
      cpf: "9615086908",
    };
    const resultado = "CPF inválido";
    return { parametros, resultado };
  },
  CPFLongo() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@email.com",
      cpf: "961508690831",
    };
    const resultado = "CPF inválido";
    return { parametros, resultado };
  },
  CPFInvalido() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@email.com",
      cpf: "12312312312",
    };
    const resultado = "CPF inválido";
    return { parametros, resultado };
  },
  CPFComPontuacao() {
    const parametros = {
      nome: "João",
      sobrenome: "Silva",
      email: "joaosilva@email.com",
      cpf: "961.508.690-83",
    };
    const resultado = "96150869083";
    return { parametros, resultado };
  },
};
