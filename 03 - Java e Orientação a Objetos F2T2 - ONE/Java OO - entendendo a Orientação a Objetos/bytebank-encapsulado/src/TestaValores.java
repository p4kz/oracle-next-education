
public class TestaValores {

	public static void main(String[] args) {
		Conta conta = new Conta(1030, 3040);
		Conta conta2 = new Conta(1330, 3340);
		Conta conta3 = new Conta(1334, 3344);
		
		
		System.out.println("Total de contas: " + Conta.getTotal());
	}

}
