package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.ContaPopanca;

public class TesteArrayReferecias {

	public static void main(String[] args) {
		Object[] contas = new Object[5];
		
		ContaCorrente cc1 = new ContaCorrente(11, 11);
		contas[0] = cc1;

		ContaCorrente cc2 = new ContaCorrente(22, 22);
		contas[1] = cc2;
		
		ContaPopanca cc3 = new ContaPopanca(33, 33);
		contas[2] = cc3;
			
		System.out.println( ((Conta) contas[2]).getAgencia());

	}

}
