// Add pessoas
let botaoAdcionar = document.querySelector('#adicionar-paciente')

botaoAdcionar.addEventListener('click', () => {
  event.preventDefault()

  // Pegando dados 
  let form = document.querySelector('#form-adiciona')

  let paciente = obtemPacienteDoFormulario(form)


  let pacienteTr = montaTr(paciente)

  let erros = validaPaciente(paciente)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }

  // Colocando pacienteTr dentro da tabela 
  let tabela = document.querySelector('#tabela-pacientes')
  tabela.appendChild(pacienteTr)

  form.reset()

  let msgErro = document.querySelector('msg-erro')
  msgErro.innerHTML = ''
})

function exibeMensagensDeErro(erros) {
  let ul = document.querySelector('.msg-erro')

  ul.innerHTML = ''

  erros.forEach(function(erro){
    let li = document.createElement('li')

    li.textContent = erro

    ul.appendChild(li)
  })
}

function obtemPacienteDoFormulario(form) {
  let paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value , form.altura.value )
  }

  return paciente
}

function montaTr(paciente) {
  let pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')


  // Colocando elementos dentro do pacienteTr
  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

  return pacienteTr
} 

function montaTd(dado, classe) {
  let td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente (paciente) {
  let erros = []

  if (paciente.nome.length == 0) {
    erros.push('nome não pode ser em branco')
  }

  if (!validaPeso(paciente.peso)){
    erros.push('Peso invalido')
  }

  if (!validdaAltura(paciente.altura)){
    erros.push('Altura invalida')
  }

  if ( paciente.gordura.length == 0) {
    erros.push('A gordura do paciente não pode ser em branco')
  }

  if ( paciente.peso.length == 0 ) {
    erros.push('Peso não pode ser me branco')
  }

  if (paciente.altura.length == 0) {
    erros.push('Altura não pode ser em branco')
  }

  return erros
}