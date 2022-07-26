class Cliente {
  nome;
  cpf;
  
  
}

class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor
      return valor
    } 
  }

  depositar(valor) {
    if (valor <= 0) return

    this._saldo += valor
  }
}

// Declarando clientes
const cliente1 = new Cliente()
cliente1.nome = 'Eric'
cliente1.cpf = 88888811111

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 82883811141

// Declarando conta corrente
const contaCorrenteEric = new ContaCorrente()
contaCorrenteEric.agencia= 1001

// Operações
contaCorrenteEric.depositar(300)
contaCorrenteEric.sacar(50)

// App
console.log(cliente1, contaCorrenteEric)
console.log(cliente2)