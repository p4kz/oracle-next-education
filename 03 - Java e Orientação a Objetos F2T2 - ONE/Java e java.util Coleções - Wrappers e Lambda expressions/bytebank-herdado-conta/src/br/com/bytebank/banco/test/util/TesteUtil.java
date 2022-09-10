package br.com.bytebank.banco.test.util;

import java.util.ArrayList;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;

public class TesteUtil {

	public static void main(String[] args) {
		
		// generics <Conta>
		ArrayList<Conta> lista = new ArrayList<Conta>();
		
		Conta cc1 = new ContaCorrente(11,11);
		lista.add(cc1);
		
		Conta cc2 = new ContaCorrente(22,22);
		lista.add(cc2);
		
		Conta cc3 = new ContaCorrente(33,33);
		lista.add(cc3);
		
		Conta cc4 = new ContaCorrente(44,44);
		lista.add(cc4);
		
		System.out.println(lista.size()+ "  " + lista.get(0));
		
//		for (int i = 0;  i < lista.size(); i++ ) {
//			System.out.println(lista.get(i));
//		}
		
		// Melhor jeito de fazer 
		for(Object oRef : lista) {
			System.out.println(oRef);
		}
		
	}

}
