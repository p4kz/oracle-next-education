
public class TestaGerente {

	public static void main(String[] args) {
		Gerente gerente = new Gerente();
		gerente.setNome("Eric");
		gerente.setCpf("11122233344");
		gerente.setSalario(5000.0);
		
		gerente.setSenha(2222);
		
		System.out.println(
			"Nome: " +
			gerente.getNome() 
			+ " Salario base: " + 
			gerente.getSalario() 
			+ " Esta logado: " + 
			gerente.autentica(2222) 
			+ " Bonus: " + 
			gerente.getBonificacao()
		);

	}

}
