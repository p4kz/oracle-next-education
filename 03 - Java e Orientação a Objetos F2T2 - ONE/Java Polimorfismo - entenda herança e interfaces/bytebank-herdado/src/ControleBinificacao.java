
public class ControleBinificacao {
	private double soma;
	
	public void registro(Funcionario f) {
		double boni = f.getBonificacao();
		this.soma = this.soma + boni;
	}
	
	public double getSoma() {
		return soma;
	}
}
