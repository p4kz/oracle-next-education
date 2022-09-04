
public class TesteReferencias {

	public static void main(String[] args) {
		Gerente g1 = new Gerente();
		
		g1.setNome("Eric");
		g1.setSalario(1000);
	
		ControleBinificacao controle = new ControleBinificacao();
		
		controle.registro(g1);
		
		String nome = g1.getNome();
		
		double boni = controle.getSoma();		
		System.out.println(nome + " " + boni);

	}

}
