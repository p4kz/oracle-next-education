
const form = document.querySelector('[data-form]')

const array = []

const generatePares = (value) => {
  let count = 2

  while (count <= value) {
    array.push(count)
    count = count + 2
  }
}

form .addEventListener('submit', (e) => {
  const input = document.querySelector('[data-input]')
  const result = document.querySelector('[data-result]')
  
  e.preventDefault()
  
  generatePares(input.value)

  result.textContent = array
})