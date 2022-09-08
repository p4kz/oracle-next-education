package br.com.bytebank.banco.modelo;

public class ContaPopanca extends Conta{
	
	public ContaPopanca (int agencia, int numero) {
		super(agencia, numero);
	}

	@Override
	public void deposita(double valor) {
		super.saldo = super.saldo + valor;		
	}
	
	@Override
	public String toString() {
		return "Conta Popança, " + super.toString();
	}
}
