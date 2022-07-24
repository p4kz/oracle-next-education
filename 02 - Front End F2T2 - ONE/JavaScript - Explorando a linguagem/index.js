console.log(`hello node`)

console.log('Hello again...')

console.log(( 10 + 8 ) * 2)

let seila = parseInt('2') + parseInt('2')

console.log(`hello ${seila} hellohello`)

const idadeValidate = (idade, acompanhado) => {
  if (idade < 18 && acompanhado === false) {
    console.log('Menores de idade não acompanhados não podem viajar')
    return
  } else if (idade < 18 && acompanhado === true) {
    console.log('Menores de idade acompanhados podem viajar')
    return
  } else {
    console.log('Pode viajar')
  } 
} 

idadeValidate(18, true)