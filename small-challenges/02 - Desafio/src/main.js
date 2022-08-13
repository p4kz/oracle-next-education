const form = document.querySelector('[data-form]')

const soma = (num1, num2) => { 
  return  parseFloat(num1) + parseFloat(num2)
} 

form.addEventListener('submit', (e) => {
  const inputOne = document.querySelector('[data-input-one]')
  const inputTwo = document.querySelector('[data-input-two]')
  const result = document.querySelector('[data-result]')

  e.preventDefault()
  result.textContent = soma(inputOne.value, inputTwo.value) 
  inputOne.value = ''
  inputTwo.value = '' 
})