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

let imcPessoa1 = calculaImc(88, 1.70)
let imcPessoa2 = calculaImc(88, 1.88)

mostra(`IMC calculado é ${imcPessoa1}`)

let soma = imcPessoa1 + imcPessoa2
mostra(`Soma imc pessoas ${soma}`)
