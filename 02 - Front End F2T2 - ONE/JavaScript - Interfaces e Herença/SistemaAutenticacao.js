export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha)
  }
}