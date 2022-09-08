
public class TesteSistema {

	public static void main(String[] args) {
		Gerente g = new Gerente();
		Administrador adm = new Administrador();
		Cliente c = new Cliente();
		
		adm.setSenha(2211);
		g.setSenha(2222);
		c.setSenha(2222);
		
		SistemaInterno si = new SistemaInterno();
		si.autentica(g);
		si.autentica(adm);
		si.autentica(c);
	}

}
