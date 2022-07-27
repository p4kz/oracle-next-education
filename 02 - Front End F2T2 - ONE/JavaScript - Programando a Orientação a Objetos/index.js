import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


// Declarando clientes
const cliente1 = new Cliente()
cliente1.nome = 'Eric'
cliente1.cpf = 88888811111

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 82883811141 


// Declarando conta corrente
const contaCorrenteEric = new ContaCorrente()
contaCorrenteEric.agencia = 1001
contaCorrenteEric.cliente = cliente1 

const contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.agencia = 1001
contaCorrenteAlice.cliente = cliente2 

// Operações
contaCorrenteEric.depositar(300)
contaCorrenteEric.depositar(500)

contaCorrenteEric.sacar(50)

contaCorrenteEric.tranferir(300, contaCorrenteAlice)

// App
console.log(contaCorrenteEric)
console.log(contaCorrenteAlice)