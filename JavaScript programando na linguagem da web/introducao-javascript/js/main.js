let pacientes = document.querySelectorAll('.paciente')
 

for ( let i = 0 ; i < pacientes.length ; i++) {
  paciente = pacientes[i]

  let tdPeso = paciente.querySelector('.info-peso')
  let peso = tdPeso.textContent
  
  let tdAltura = paciente.querySelector('.info-altura')
  let altura = tdAltura.textContent
  
  let tdImc = paciente.querySelector('.info-imc')
  
  // isValid
  let pesoEValido = true
  let alturaEValido = true 
  
  // Validando Peso / Altura 
  if (peso <= 0 || peso >= 400) {
    console.log('Peso invalido')
    pesoEValido = false
    tdPeso.textContent = 'Peso invalido'
    paciente.classList.add('paciente-invalido') 
  } else if (altura <= 0 || altura >= 2.50) {  
    console.log('Altura invalida')
    alturaEValido = false
    tdAltura.textContent = 'Altura invalida'
    paciente.classList.add('paciente-invalido') 
  }
  
  // Validando imc
  if (alturaEValido && pesoEValido) {
    let imc = peso / (altura * altura) 
    tdImc.textContent = imc.toFixed(2)
  }
}

// Add pessoas
let botaoAdcionar = document.querySelector('#adicionar-paciente')

botaoAdcionar.addEventListener('click', () => {
  event.preventDefault()

  // Pegando dados 
  let form = document.querySelector('#form-adiciona')
  let nome = form.nome.value
  let peso = form.peso.value
  let altura = form.altura.value
  let gordura = form.gordura.value

  // criando paciente no html
  let pacienteTr = document.createElement('tr')

  let nomeTd = document.createElement('td')
  let pesoTd = document.createElement('td')
  let alturaTd = document.createElement('td')
  let gorduraTd = document.createElement('td')
  let imcTd = document.createElement('td')

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  
  // Colocando elementos dentro do pacienteTr
  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)

  // Colocando pacienteTr dentro da tabela 
  let tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)

})
