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

  // Criando paciente no html
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
  imcTd.textContent = calculaImc(peso, altura)
  
  // Colocando elementos dentro do pacienteTr
  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  // Colocando pacienteTr dentro da tabela 
  let tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)

})