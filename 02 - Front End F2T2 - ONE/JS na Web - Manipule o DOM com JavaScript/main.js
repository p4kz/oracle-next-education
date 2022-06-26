// Immediately Invoked Function Expression

import BotaoConclui from "./components/concluiTarefa.js"
import BotaoDeleta from "./components/deletaTarefa.js"

const criarTarefa = (event) => {
  event.preventDefault()

  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value

  const tarefa = document.createElement('li')
  tarefa.classList.add('task')
  
  const conteudo = `<p class="content">${valor}</p>`

  tarefa.innerHTML = conteudo
  lista.appendChild(tarefa)
  
  tarefa.appendChild(BotaoConclui())
  tarefa.appendChild(BotaoDeleta())
  
  input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa)
