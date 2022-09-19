package br.com.bytebank.banco.modelo;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class TesteSort {

        public static void main(String[] args) {

                Conta cc1 = new ContaCorrente(22, 33);
                cc1.deposita(333.0);

                Conta cc2 = new ContaCorrente(22, 44);
                cc2.deposita(444.0);

                Conta cc3 = new ContaCorrente(22, 11);
                cc3.deposita(111.0);

                Conta cc4 = new ContaCorrente(22, 22);
                cc4.deposita(222.0);

                List<Conta> lista = new ArrayList<Conta>();
                lista.add(cc1);
                lista.add(cc2);
                lista.add(cc3);
                lista.add(cc4);
                
                NumeroDaContaComparator comparador = new NumeroDaContaComparator();
                lista.sort(comparador);
                
                System.out.println("-----------------");
                for (Conta conta : lista) {
                	System.out.println(conta);
                }

        }

}

class NumeroDaContaComparator implements Comparator<Conta> {
	@Override
	public int compare(Conta c1, Conta c2) {
		if (c1.getNumero() > c2.getNumero()) {
			return -1;
		} 
		
		if (c1.getNumero() > c2.getNumero()) {
			return 1;
		} 
		return 0;
	}
}