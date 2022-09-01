
public class TesteSaca {

	public static void main(String[] args) {
		Conta c = new ContaCorrente(111, 1110);
		c.deposita(1000);
		
		try {
			c.saca(1100);			
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
		}
		
		System.out.println(c.getSaldo());
	}

}
