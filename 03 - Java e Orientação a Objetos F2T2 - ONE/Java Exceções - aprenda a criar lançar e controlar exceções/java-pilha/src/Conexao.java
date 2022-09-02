
public class Conexao implements AutoCloseable {
	
	public Conexao() {
		System.out.println("Open app");
	}
	
	public void leDados() {
		System.out.println("Recebendo dados");
		throw new IllegalStateException();
	}
	
	@Override
	public void close() {
		// TODO Auto-generated method stub
		System.out.println("fechando conexao");
	}
}
