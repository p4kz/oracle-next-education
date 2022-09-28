package br.com.alura.java.io.teste;

import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;

public class TesteUnicodeEEncoding {

	public static void main(String[] args) throws UnsupportedEncodingException {
		String s = "C";
		System.out.println(s.codePointAt(0));
		
		Charset charset = Charset.defaultCharset();
		System.out.println(charset.displayName());
		byte[] bytes = s.getBytes("UTF-16");
		System.out.println(bytes.length + ", UTF-16");
	}

}
