package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.ContaPopanca;
import br.com.bytebank.banco.modelo.SaldoInsuficienteException;

public class TesteContas {

	public static void main(String[] args) throws SaldoInsuficienteException {
		// full qualified name FQN
		ContaCorrente cc = new ContaCorrente(111,111);
		
		cc.deposita(110);
		
		ContaPopanca cp = new ContaPopanca(222,222);
		
		cp.deposita(200);
		
		cc.transfere(100, cp);
		
		System.out.println("CC " + cc.getSaldo());
		System.out.println("CP " + cp.getSaldo());

	}

}
