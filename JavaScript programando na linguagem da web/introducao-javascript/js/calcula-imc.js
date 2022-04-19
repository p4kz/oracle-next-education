let pacientes = document.querySelectorAll('.paciente')
 

for ( let i = 0 ; i < pacientes.length ; i++) {
  paciente = pacientes[i]

  let tdPeso = paciente.querySelector('.info-peso')
  let peso = tdPeso.textContent
  
  let tdAltura = paciente.querySelector('.info-altura')
  let altura = tdAltura.textContent
  
  let tdImc = paciente.querySelector('.info-imc')
  
  // isValid
  let pesoEValido = validaPeso(peso)
  let alturaEValido = validdaAltura(altura)
  
  // Validando Peso / Altura 
  if (!pesoEValido) {
    console.log('Peso invalido')
    pesoEValido = false
    tdPeso.textContent = 'Peso invalido'
    paciente.classList.add('paciente-invalido') 
  } 

  if (!alturaEValido) {  
    console.log('Altura invalida')
    alturaEValido = false
    tdAltura.textContent = 'Altura invalida'
    paciente.classList.add('paciente-invalido') 
  }
  
  // Validando imc
  if (alturaEValido && pesoEValido) {
    let imc = calculaImc(peso, altura)
    tdImc.textContent = imc
  }
}

function calculaImc(peso, altura) {
  let imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}

function validaPeso(peso) {
  if( peso >= 0 && peso < 400) {
    return true
  } else {
    return false
  }
}

function validdaAltura(altura) {
  if ( altura >= 0 && altura < 2.0  ) {
    return true
  } else {
    return false
  }
}