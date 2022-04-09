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

let totalFamiliares = parseInt(prompt('Qual a quantidade total de familiares?'))

let totalIdades = 0
let numero = 1 

while (numero <= totalFamiliares ){
  let idade = parseInt(prompt('Informe a idade do familiar'))
  totalIdades = totalIdades + idade
  numero++
}

let media = totalIdades / totalFamiliares

mostra('A media das idades é ' + media)