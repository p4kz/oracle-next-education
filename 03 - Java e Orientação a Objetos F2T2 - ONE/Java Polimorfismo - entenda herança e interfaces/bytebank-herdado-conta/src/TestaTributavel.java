
public class TestaTributavel {

	public static void main(String[] args) {
		ContaCorrente cc = new ContaCorrente(22, 444);
		cc.deposita(100);
		
		SeguroDeVida sv = new SeguroDeVida();
		
		CalculadoraDeImposto calc = new CalculadoraDeImposto();
		calc.registra(cc);
		calc.registra(sv);
		
		System.out.println(calc.getTotalImposto());

	}

}
