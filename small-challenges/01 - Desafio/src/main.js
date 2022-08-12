
const main = document.querySelector('[data-main]') 
const text = document.querySelector('[data-text]')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < array.length; i++) {
  const createDiv = document.createElement('div')
  createDiv.classList.add('box__tab')  

  for (let x = 0; x < array.length; x++) {
    createLine = document.createElement('p')
    createLine.classList.add('box__line')
    
    let result = array[i] * array[x]

    createLine.textContent = `${array[i]} x ${array[x]} = ${result}`
    createDiv.appendChild(createLine)
  }
  
  main.appendChild(createDiv)

}

text.textContent = 'Quero ter acesso ao EmpregaONE'
