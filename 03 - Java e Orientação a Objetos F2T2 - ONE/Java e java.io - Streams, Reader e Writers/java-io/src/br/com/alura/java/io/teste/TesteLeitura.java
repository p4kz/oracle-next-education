package br.com.alura.java.io.teste;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;

public class TesteLeitura {

	public static void main(String[] args) throws IOException {
		
		OutputStream fis = new FileOutputStream("teste2.txt");
		Writer osw = new OutputStreamWriter(fis);
		
		BufferedWriter bw = new BufferedWriter(osw);
		
		
		bw.write("Lorem lorem lorem lorem lorem lorem lorem");
		bw.newLine();
		bw.newLine();
		bw.write("Lorem lorem lorem lorem lorem lorem lorem");
		bw.close();
	}

}
