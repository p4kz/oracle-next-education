
public class Fluxo {
	
    public static void main(String[] args) {
        System.out.println("Ini do main");
        try {
        	metodo1();			
		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage());
		}
        System.out.println("Fim do main");
    }

    private static void metodo1() {
        System.out.println("Ini do metodo1");
		metodo2();
        System.out.println("Fim do metodo1");
    }

    private static void metodo2() {
        System.out.println("Ini do metodo2");
        
        try {
        	throw new MinhaExcecao("deu errado");			
		} catch (Exception e) {
			// TODO: handle exception
		}
        
        System.out.println("Fim do metodo2"); 
    }
}