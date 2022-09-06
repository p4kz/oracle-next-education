package br.com.bytebank.banco.test;

import java.util.Iterator;

public class TesteString {

	public static void main(String[] args) {
		String nome = "Alura";
		String nome2 = "alura";
		String hipe = nome.replace(nome, nome2);
		
		char c = nome.charAt(2);
		
		int x = nome.indexOf("ur");
		
		for (int i = 0; i < nome.length(); i++ ) {
			System.out.println(nome.charAt(i));
		}
		
		System.out.println(x);
	}

}
