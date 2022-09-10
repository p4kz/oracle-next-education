package br.com.bytebank.banco.modelo;

public class GuardadorDeRefencias {
	private Conta[] referencias;
	private int posicaoLivre;
	
	public GuardadorDeRefencias() {
		this.referencias = new Conta[10];
		this.posicaoLivre = 0;
	}
	
	public void adiciona( Conta ref ) {
		this.referencias[this.posicaoLivre] = ref;
		this.posicaoLivre++;
	}
	
	public int getQuantidadeDeElementos () {
		return this.posicaoLivre;
	}

	public Conta getReferecia(int p) {
		
		return this.referencias[p];
	}
}
