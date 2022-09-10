package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.GuardadorDeContas;

public class TesteGuardador {

	public static void main(String[] args) {
		GuardadorDeContas gdc = new GuardadorDeContas();
		
		Conta cc = new ContaCorrente(11,11);
		gdc.adiciona(cc);
		
		Conta cc1 = new ContaCorrente(13,13);
		gdc.adiciona(cc1);
		
		int tamanho = gdc.getQuantidadeDeElementos(); 
		System.out.println(tamanho);
		
		Conta ref = gdc.getReferecia(0);
		System.out.println(ref);
	}

}
