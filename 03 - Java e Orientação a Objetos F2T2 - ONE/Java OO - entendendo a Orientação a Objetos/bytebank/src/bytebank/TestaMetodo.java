package bytebank;

public class TestaMetodo {

	public static void main(String[] args) {
		Conta contaEric = new Conta();
		contaEric.saldo = 100;
		contaEric.titular = "Eric Mendonça";
		contaEric.deposita(50);
		contaEric.saca(20);
		
		Conta contaMarco = new Conta();
		contaMarco.saldo = 1000;
		
		boolean sucessoTransferencia = contaMarco.transfere(300, contaEric);
		
		System.out.println(contaEric.saldo);
		System.out.println(contaMarco.saldo);
		
		
		if(sucessoTransferencia) {
			System.out.println("Tranferencia feita com sucesso");
		} else {
			System.out.println("Saldo insuficiente");
		}
	}

}
