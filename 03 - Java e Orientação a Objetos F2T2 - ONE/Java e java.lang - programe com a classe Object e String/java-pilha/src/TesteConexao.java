
public class TesteConexao {

	public static void main(String[] args) {
		
		
		
		try (Conexao con = new Conexao()) {
			con.leDados();
		} catch (Exception e) {
			System.out.println("Erro na conexao");
		}
		
		
		
		
//		Conexao con = null;
//		
//		try {			
//			con = new Conexao();
//			con.leDados();
//		} catch (Exception e) {
//			System.out.println("Erro na conexao");
//		} finally {
//			con.close();			
//		}

	}

}
