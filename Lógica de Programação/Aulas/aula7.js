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

let numeroPensado = Math.round(Math.random() * 10)
let chute = parseInt(prompt('digite seu numero'))

if(chute === numeroPensado) {
  mostra('você acertou')
} else {
  mostra(`você errou, o numero pensando foi ${numeroPensado}`)
}