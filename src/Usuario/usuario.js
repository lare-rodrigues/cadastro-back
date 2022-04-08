const estadosEnum = require("../utils/estados");
class Usuario {
  constructor({
    nome,
    sobrenome,
    email,
    cep,
    cpf,
    endereco,
    numero,
    cidade,
    estado,
  }) {
    this.nome = this.#validaNome(nome);
    this.sobrenome = this.#validaNome(sobrenome);
    this.email = this.#validarEmail(email);
    this.cep = this.#validaCEP(cep);
    this.cpf = this.#validarCPF(cpf);
    this.endereco = this.#validaEndereco(endereco);
    this.numero = this.#validaNumero(numero);
    this.cidade = this.#validaCidade(cidade);
    this.estado = this.#validaEstado(estado);
  }

  #validaNome(nome) {
    if (!nome || nome.length < 3 || nome.length > 30) {
      throw new Error("Nome inválido");
    }
    return nome;
  }

  #validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) {
      return email;
    }
    throw new Error("E-mail inválido");
  }

  #validarCPF(cpf) {
    let soma;
    let resto;
    soma = 0;
    if (!cpf || cpf == "00000000000" || cpf.length != 11) {
      throw new Error("CPF inválido");
    }
    for (let i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) {
      resto = 0;
    }

    if (resto != parseInt(cpf.substring(9, 10))) {
      throw new Error("CPF inválido");
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if (resto == 10 || resto == 11) {
      resto = 0;
    }
    if (resto != parseInt(cpf.substring(10, 11))) {
      throw new Error("CPF inválido");
    }

    return cpf;
  }

  #validaCEP(cep) {
    const regex = /^\d*$/;
    if (!cep || cep.length != 8 || !regex.test(cep)) {
      throw new Error("CEP inválido");
    }
    return cep;
  }

  #validaEndereco(endereco) {
    if (!endereco) {
      throw new Error("Endereço inválido");
    }
    return endereco;
  }

  #validaNumero(numero) {
    if (!numero) {
      throw new Error("Número inválido");
    }
    return numero;
  }

  #validaCidade(cidade) {
    if (!cidade) {
      throw new Error("Cidade inválido");
    }
    return cidade;
  }

  #validaEstado(estado) {
    if (!estado || !estadosEnum[estado]) {
      throw new Error("Estado inválido");
    }
    return estado;
  }
}

module.exports = Usuario;
