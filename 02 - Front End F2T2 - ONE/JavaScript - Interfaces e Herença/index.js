import { Cliente } from "./Cliente.js"
import { Conta } from "./Conta/Conta.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

// Declarando clientes
const cliente1 = new Cliente('Eric', 88888811111, '456')

// Declarando conta corrente
const contaCorrente = new ContaCorrente(cliente1, 1001)

// Declarando conta poupança
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

// Declarando conta salario
const contaSalario = new ContaSalario(cliente1)

// Cadastrar cliente

// Login funcionarios 
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, '456')

// Operações
contaCorrente.depositar(300)
contaCorrente.depositar(500)

contaCorrente.sacar(50)

contaSalario.depositar(101)
contaSalario.sacar(10)

// App
console.log('------------------------- Contas -------------------------')
console.log(cliente1EstaLogado)
console.log(contaCorrente)
console.log()
console.log(contaPoupanca)
console.log()
console.log(contaSalario)
console.log('__________________________________________________________')
console.log()
console.log(`Total de contas: ${ContaCorrente.numeroDeContas}`)
console.log()

//----------------------------------------------------------------------------

// Declarando Diretor
const diretor = new Diretor('Eric', 10000, 11122233344)

// Declarando Gerente
const gerente = new Gerente('p4k', 5000, 11222333444)

// Cadastrar funcionario
diretor.cadastrarSenha('1234')
gerente.cadastrarSenha('123')

// Login funcionarios 
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123')
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '1234')

// App
console.log('----------------------- Funcionarios -----------------------')


console.log(`Gerente: ${gerenteEstaLogado}, Diretor: ${diretorEstaLogado}`)
console.log()

