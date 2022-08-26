
public class SistemaInterno {
	
	int senha = 2222;
	
	public void autentica(Autenticavel fa) {
		boolean autenticou = fa.autentica(this.senha);
		if (autenticou) {
			System.out.println("pode entrar no sitema");
		} else {
			System.out.println("Não pode entrar no sitema");
		}
	}
}
