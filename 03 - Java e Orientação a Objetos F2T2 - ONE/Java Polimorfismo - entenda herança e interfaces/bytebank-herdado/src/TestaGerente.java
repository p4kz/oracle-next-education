
public class TestaGerente {

	public static void main(String[] args) {
		Gerente gerente = new Gerente();
		gerente.setNome("Eric");
		gerente.setCpf("11122233344");
		gerente.setSalario(700);
		
		gerente.setSenha(2222);
		
		System.out.println(gerente.getNome() + " " + gerente.getSalario() + " " + gerente.autentica(2222));

	}

}
