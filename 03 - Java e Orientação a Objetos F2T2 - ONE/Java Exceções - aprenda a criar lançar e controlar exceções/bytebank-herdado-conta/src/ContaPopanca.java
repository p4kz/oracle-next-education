
public class ContaPopanca extends Conta{
	
	public ContaPopanca (int agencia, int numero) {
		super(agencia, numero);
	}

	@Override
	public void deposita(double valor) {
		super.saldo = super.saldo + valor;		
	}
}
