package br.com.bytebank.banco.test;

import br.com.bytebank.banco.modelo.Conta;
import br.com.bytebank.banco.modelo.ContaCorrente;

public class TesteArrayPrimitivo {

	public static void main(String[] args) {
		int[] idades = new int[5];
		
		idades[0] = 12;
		idades[1] = 44;
		idades[2] = 55;
		idades[3] = 54;
		idades[4] = 55;

		for (int i = 0;i < idades.length; i++) {
			idades[i] = i * i;
		}
		
		for (int i = 0;i < idades.length; i++) {
			System.out.println(idades[i]);
		}
		
		System.out.println();
	}
	
	
}
