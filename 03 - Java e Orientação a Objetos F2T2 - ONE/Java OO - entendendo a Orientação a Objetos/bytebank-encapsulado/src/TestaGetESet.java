
public class TestaGetESet {

	public static void main(String[] args) {
		Conta conta = new Conta();
		conta.setNumero(1337);
		
		System.out.println(conta.getNumero());
		
		Cliente eric = new Cliente();
		eric.setNome("Eric Mendonça");
		
		conta.setTitular(eric);
		
		System.out.println(conta.getTitular().getNome());
		
		conta.getTitular().setProfissao("Developer");
	}

}
