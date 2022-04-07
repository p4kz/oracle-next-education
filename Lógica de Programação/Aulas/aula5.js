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

function calculaImc(peso, altura) {
  return peso / (altura * altura)
}

let nome = prompt('Informe seu nome')
let peso = prompt(`${nome}, informe seu peso`)
let altura = prompt(`${nome}, infome sua altura`)

let imc = calculaImc(peso, altura)

mostra(`Olá, ${nome} seu imc é ${imc}`)
