package bytebank;

public class CriaConta {

	public static void main(String[] args) {
		Conta primeiraConta = new Conta();
		primeiraConta.saldo = 199.0;
		
		
		Conta segundaConta = new Conta();
		segundaConta.saldo = 50.0;
		
		System.out.println("Saldo da primeira conta tem: " + primeiraConta.saldo);
		System.out.println("Saldo da segunda conta tem: " + segundaConta.saldo);
	}

}
