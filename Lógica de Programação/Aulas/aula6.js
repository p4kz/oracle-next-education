function pula() {
  document.write('<br>')
}

function barra() {
  document.write('<hr>')
}

function mostra( text ) {
  document.write( text )
  pula()
}



let vitorias = parseInt(prompt('Entre com o numero de vitorias'))
let empates = parseInt(prompt('Entre com o numero de empates'))

let pontos = vitorias * 3 + empates

mostra(`Os pontos do seu time é ${pontos}`)

if ( pontos > 28 ) {
  mostra('Seu time esta melhor que ano passado.')
}

if (pontos < 28) {
  mostra('Seu time esta pior que ano passado.')
}

if (pontos === 28) {
  mostra('Seu time esta igual que ano passado.')
}