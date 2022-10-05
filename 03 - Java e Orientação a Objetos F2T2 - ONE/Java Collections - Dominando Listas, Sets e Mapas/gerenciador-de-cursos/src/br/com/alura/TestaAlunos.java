package br.com.alura;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

public class TestaAlunos {

	public static void main(String[] args) {
		Collection<String> alunos = new HashSet<>();
		alunos.add("Eric mm");
		alunos.add("nico mm");
		alunos.add("rico mm");
		
		for (String aluno : alunos ) {
			System.out.println(aluno);
		}
		
		alunos.forEach(aluno -> {
			System.out.println(aluno);
		});
		
		boolean eric = alunos.contains("Eric mm");
		System.out.println(eric);
		
		System.out.println(alunos);
	}

}
