package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.ContaCorrente;

public class TesteArrayReferecias {

	public static void main(String[] args) {
		ContaCorrente[] contas = new ContaCorrente[5];
		
		ContaCorrente cc1 = new ContaCorrente(11, 11);
		contas[0] = cc1;

		ContaCorrente cc2 = new ContaCorrente(22, 22);
		contas[1] = cc2;
		
		for (int i = 0; i < contas.length; i++) {
	
		}
		
		System.out.println( contas[0].getAgencia());

	}

}
