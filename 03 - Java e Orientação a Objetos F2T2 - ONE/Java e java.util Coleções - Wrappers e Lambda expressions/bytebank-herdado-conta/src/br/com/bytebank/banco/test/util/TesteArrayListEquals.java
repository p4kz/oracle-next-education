package br.com.bytebank.banco.test.util;

import java.util.ArrayList;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;
import br.com.bytebank.banco.modelo.GuardadorDeContas;

public class TesteArrayListEquals {
	
	public static void main(String[] args) {
		ArrayList<Conta> lista = new ArrayList<Conta>();
		GuardadorDeContas gdc = new GuardadorDeContas();
		
		Conta cc1 = new ContaCorrente(11,11);
		lista.add(cc1);
		
		Conta cc2 = new ContaCorrente(22,22);
		lista.add(cc2);
		
		Conta cc3 = new ContaCorrente(33,33);
		lista.add(cc3);
		
		Conta cc4 = new ContaCorrente(44,44);
		lista.add(cc4);
		
		boolean existe = lista.contains(cc2);
		
		System.out.println(existe);
	}	
}
