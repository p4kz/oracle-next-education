import { valida } from "./validacao.js";

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  inputs.addEventListener('blur', (evento) => {
    valida(evento.target)
  })
})