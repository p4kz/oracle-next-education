package br.com.alura;

import java.util.ArrayList;
import java.util.Collections;

public class TesteListas {

	public static void main(String[] args) {
		String aula1 = "conhecendo mais de listas";
		String aula2 = "Modelando a classe aula";
		String aula3 = "trabalhando com cursos e sets";
		
		ArrayList<String> aulas = new ArrayList<>();
		aulas.add(aula1);
		aulas.add(aula2);
		aulas.add(aula3);
		aulas.add("Aumentado nosso conhecimento");
		System.out.println(aulas);
		
		aulas.remove(0);
		System.out.println(aulas);
		
		for (String aula : aulas) {
			System.out.println(aula);
		}
		
		aulas.forEach(aula -> {
			System.out.println("percorrendo: " + aula);
		});
		
		Collections.sort(aulas);

	}

}
