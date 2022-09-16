package br.com.bytebank.banco.test.util;

public class Teste {

	public static void main(String[] args) {
		/*
		 * 8 bytes double
		 * 4 bytes float
		 * 8 bytes long
		 * 4 bytes int
		 * 2 bytes short
		 * 1 bytes byte
		 * 2bytes char 
		 * */
		
		// por baixo dos panos
		Integer ref = Integer.valueOf(11);
		
		System.out.println(ref.intValue());
		
		Double dref = Double.valueOf(2.2);

	}

}
