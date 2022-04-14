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
