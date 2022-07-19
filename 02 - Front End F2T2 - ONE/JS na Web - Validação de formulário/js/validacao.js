export function valida(input) {
  const tipoDeinput = input.dataset.tipo

  if(Validadores[tipoDeinput]){
    Validadores[tipoDeinput](input)
  }
}

const Validadores = {
  dataNascimento: input => validaDataNacimento(input), 
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