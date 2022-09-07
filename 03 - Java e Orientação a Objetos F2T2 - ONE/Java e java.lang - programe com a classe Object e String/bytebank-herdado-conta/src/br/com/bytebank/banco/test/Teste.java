package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;

public class Teste {

	public static void main(String[] args) {
		System.out.println("x");
		System.out.println(1);
		System.out.println(true);
		
		ContaCorrente cc = new ContaCorrente(11,11);
		
		
		System.out.println(cc);
	}
	
	static void println(){};
	
	static void println(int a){}; 
	
	static void println(boolean valor){};
	
	static void println(Object ref){};
	
}
