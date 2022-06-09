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

for ( let linha = 1 ; linha <= 3 ; linha++ ) {
  for( let coluna = 1 ; coluna <= 10 ; coluna++ ) {
    document.write('*')
  }
  pula()
}