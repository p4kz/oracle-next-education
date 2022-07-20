export function valida(input) {
  const tipoDeInput = input.dataset.tipo

  if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
  }

  if(input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido')
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
  } else {
    input.parentElement.classList.add('input-container--invalido')
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
  }
}

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const mensagensDeErro = {
  nome: {
    valueMissing: 'O campo nome não pode estar vazio',
  },
  email: {
    valueMissing: 'O campo email não pode estar vazio',
    typeMismatch: 'O email digitado não é valido'
  },
  senha: {
    valueMissing: 'O campo senha não pode estar vazio',
    patternMismatch: 'A senha deve conter entre 6 e 12 caracteres, deve conter pelomenos uma letra maiuscula, um numero sem simbolos'
  },
  dataNascimento:  {
    valueMissing: 'O campo data não pode estar vazio',
    customError: 'Você deve ser maior que 18 anos para se cadastrar'
  }
}

const validadores = {
  dataNascimento: input => validaDataNacimento(input), 
} 

function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = ''

  tiposDeErro.forEach(erro => {
    if(input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro]
    }
  })

  
  
  return mensagem
}

function validaDataNacimento(input) {
  const dataRecebida = new Date(input.value)
  let  mensagem = ''

  if(!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
  }

  input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear() + 18 , data.getUTCMontth(), data.getUTCDate())

  return dataMais18 <= dataAtual
}