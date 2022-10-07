package br.com.alura;

public class TestaCursoComAlunos {

	public static void main(String[] args) {
        Curso javaColecoes = new Curso("Dominando as colecoes do Java",
                "Paulo Silveira");

        javaColecoes.adiciona(new Aula("Trabalhando com ArrayList", 21));
        javaColecoes.adiciona(new Aula("Criando uma Aula", 20));
        javaColecoes.adiciona(new Aula("Modelando com colecoes", 24));
        
        Aluno a1 = new Aluno("eric mm", 1213);
        Aluno a2 = new Aluno("p4k mm", 1314);
        Aluno a3 = new Aluno("maria mm", 1563);
        
        javaColecoes.matricula(a1);
        javaColecoes.matricula(a2);
        javaColecoes.matricula(a3);
        
        javaColecoes.getAlunos().forEach( 
        	a -> System.out.println(a)
        );
        
        System.out.println(javaColecoes.estaMatriculado(a1));
        
        String nome = "eric mm";
        
        System.out.println(javaColecoes.estaMatriculado());
	}

}
