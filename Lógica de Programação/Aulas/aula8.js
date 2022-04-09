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

//let limite = parseInt(prompt('Entre com a data limite'))
let anoCopa = 1930

while ( anoCopa <= 2022 ) {
  mostra('Teve copa ' + anoCopa)
  anoCopa = anoCopa + 4
}