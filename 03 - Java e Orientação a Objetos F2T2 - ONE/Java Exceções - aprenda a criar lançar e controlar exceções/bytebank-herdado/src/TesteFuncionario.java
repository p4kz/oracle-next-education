
public class TesteFuncionario {

	public static void main(String[] args) {
		Funcionario funcionario = new Gerente();
		funcionario.setNome("Eric Mendonça");
		funcionario.setCpf("11122233344");
		funcionario.setSalario(1000);
		
		System.out.println(funcionario.getNome() + " " );
		
	}

}
