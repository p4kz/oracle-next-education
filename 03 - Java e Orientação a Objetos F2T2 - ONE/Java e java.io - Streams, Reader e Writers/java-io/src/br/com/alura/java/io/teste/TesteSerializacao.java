package br.com.alura.java.io.teste;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class TesteSerializacao {

	public static void main(String[] args) throws IOException {
		
//		ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("objeto.bin")); 
//		
//		oos.writeObject(name);
//		
//		oos.close();
		
		ObjectInputStream ois = new ObjectInputStream(new FileInputStream("objecto.bin"));
		String name = "eric";
		 
		ois.close();
		
		System.out.println(name);

	}

}
