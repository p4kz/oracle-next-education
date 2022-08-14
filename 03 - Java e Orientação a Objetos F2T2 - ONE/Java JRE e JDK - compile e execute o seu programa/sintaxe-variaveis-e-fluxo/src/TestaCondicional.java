
public class TestaCondicional {

	public static void main(String[] args) {

		int idade = 10;
		int quantidadePessoas = 3;

		if (idade >= 18) {
			System.out.println("Você tem mais de 18 anos");
			System.out.println("Seja bem vindo");
		} else {
			if (quantidadePessoas >= 2) {
				System.out.println("Você é menos que 18 mas esta acompanhado e pode entar");
			} else {
				System.out.println("Você é menor que 18 anos");
			}
		}

	}

}
