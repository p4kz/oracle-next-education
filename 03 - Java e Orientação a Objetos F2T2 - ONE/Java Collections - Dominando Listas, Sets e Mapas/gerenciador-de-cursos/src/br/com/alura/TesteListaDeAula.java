package br.com.alura;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class TesteListaDeAula {

	public static void main(String[] args) {
		Aula a2 = new Aula("Lista e objeto", 11);
		Aula a1 = new Aula("Revistando array list", 12);
		Aula a3 = new Aula("Relacionamento lista e objeto", 13);
		
        ArrayList<Aula> aulas = new ArrayList<>();
        aulas.add(a1);
        aulas.add(a2);
        aulas.add(a3);

        System.out.println(aulas);
        
        
        aulas.sort(Comparator.comparing(Aula::getTempo));

	}

}
