
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

let ano = 2022

mostra('Eric tem ' + (ano - 1998) + ' anos')

mostra('Marta tem ' + (ano - 1928) + ' anos')

ano = 2017

mostra('Clovis tem ' + (ano - 1948) + ' anos')
barra()

