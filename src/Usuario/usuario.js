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
    this.email = email;
    this.cep = cep;
    this.cpf = cpf;
    this.endereco = endereco;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
  }

  #validaNome(nome) {
    if (!nome || nome.length < 3 || nome.length > 30) {
      throw new Error("Nome inválido");
    }
    return nome;
  }
}

module.exports = Usuario;
