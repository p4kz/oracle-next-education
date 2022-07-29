import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

// Declarando clientes
const cliente1 = new Cliente('Eric', 88888811111)
const cliente2 = new Cliente('Alice', 82883811141)

// Declarando conta corrente
const conta1 = new Conta(0 ,1001, cliente1)
const conta2 = new Conta(0 ,101, cliente2)

// Declarando conta poupança
const contaPoupanca = new Conta(50, cliente1, 1001)

// Operações
conta1.depositar(300)
conta1.depositar(500)

conta1.sacar(50)

conta1.tranferir(300, conta2)

// App
console.log('------------------------- Contas -------------------------')
console.log()
console.log(conta1)
console.log()
console.log(conta2)
console.log()
console.log(contaPoupanca)
console.log('__________________________________________________________')
console.log()
console.log(`Total de contas: ${ContaCorrente.numeroDeContas}`)