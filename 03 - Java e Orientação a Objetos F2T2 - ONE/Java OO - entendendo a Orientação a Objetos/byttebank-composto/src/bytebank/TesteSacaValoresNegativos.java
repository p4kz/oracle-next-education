package bytebank;

public class TesteSacaValoresNegativos {

	public static void main(String[] args) {
		Conta conta = new Conta();
		conta.deposita(100);
		conta.saca(101);
		System.out.println(conta.getSaldo());
		
	}

}
