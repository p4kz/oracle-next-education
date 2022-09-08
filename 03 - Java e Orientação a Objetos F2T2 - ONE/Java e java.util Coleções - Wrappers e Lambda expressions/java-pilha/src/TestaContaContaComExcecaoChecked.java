
public class TestaContaContaComExcecaoChecked {
	public static void main(String[] args) {
		Conta c = new Conta();
		
		try {
			c.deposita();
		} catch (MinhaExcecao e) {
			// TODO Auto-generated catch block
			System.out.println("trantamento...");
		}
	}
}
