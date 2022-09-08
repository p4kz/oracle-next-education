package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;

public class TesteSaca {

	public static void main(String[] args) {
		Conta c = new ContaCorrente(111, 1110);
		c.deposita(1000);
		
		try {
			c.saca(1100);			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		System.out.println(c.getSaldo());
	}

}
