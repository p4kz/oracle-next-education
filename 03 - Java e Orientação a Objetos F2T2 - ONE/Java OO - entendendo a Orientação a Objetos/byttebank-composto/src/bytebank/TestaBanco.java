package bytebank;

public class TestaBanco {

	public static void main(String[] args) {
		Cliente eric = new Cliente();
		
		eric.nome = "Eric Mendonça";
		eric.cpf = "111.222.333-44";
		eric.profissao = "Developer";
		
		Conta contaEric = new Conta();
		contaEric.deposita(200);
		
		contaEric.titular = eric;
		
		System.out.println(contaEric.titular.nome);

	}

}
