
public class TestaCondicional2 {

	public static void main(String[] args) {
		int idade = 20;
		int quantidadePessoas = 1;
		boolean acompanhado = quantidadePessoas >= 2;

		System.out.println(acompanhado);

		if (idade >= 18 && acompanhado) {
			System.out.println("Você tem mais de 18 anos ou esta acompanhado");
			System.out.println("Seja bem vindo");
		} else {
			System.out.println("Você é menor que 18 anos ou não esta acompanhado");

		}
	}

}
