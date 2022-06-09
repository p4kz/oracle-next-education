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

let tabuada = 2
// let multiplicador = 1

// while ( multiplicador <= 10 ) {
//   mostra(tabuada * multiplicador)
//   multiplicador = multiplicador + 1
// }

for ( let multiplicador = 1 ; multiplicador <= 10 ; multiplicador++ ) {
  mostra(tabuada * multiplicador)
}

// let i = 0 
// while (i < 10) {
//   alert('resultado é ' + (2 * i))
//   i++
// }

mostra('FIM')