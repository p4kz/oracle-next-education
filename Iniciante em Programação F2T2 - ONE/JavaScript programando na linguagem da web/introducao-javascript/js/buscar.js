let botaoAdd = document.querySelector('#buscar-paciente')

botaoAdd.addEventListener('click', function() {
  let xhr = new XMLHttpRequest

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

  xhr.addEventListener('load', function () {
    let erroAjax = document.querySelector('#erro-ajax')

    if ( xhr.status == 200){
      erroAjax.classList.add('inv')
      
      let resposta = xhr.responseText
      let pacientes = JSON.parse(resposta)
    
      pacientes.forEach(function(paciente) {
      adicionaPacientenaTabela(paciente)       
      })

    } else {
      console.log(xhr.status)
      console.log(xhr.responseText)
      erroAjax.classList.remove('inv')
    }
  })

  xhr.send()

  console.log('buscando')
})