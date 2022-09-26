package br.com.alura.java.io.teste;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

public class TesteEscritaFileWriter {

    public static void main(String[] args) throws IOException {

    //Fluxo de Entrada com Arquivo
    //OutputStream fos = new FileOutputStream("lorem2.txt");
    //Writer osw = new OutputStreamWriter(fos);

    FileWriter fw = new FileWriter("teste2.txt");
    BufferedWriter bw = new BufferedWriter(fw);

    bw.write("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
    bw.newLine();
    bw.write("asfasdfsafdas dfs sdf asf assdß");

    bw.close();

    }
}
