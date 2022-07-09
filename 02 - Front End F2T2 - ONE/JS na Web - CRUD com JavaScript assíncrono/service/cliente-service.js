

const criaNovaLinha = (nome, email) => {
  const linhaNovoCliente = document.createElement('tr')

  const conteudo = `
    <td class="td" data-td>${nome}</td>
      <td>${email}</td>
      <td>
      <ul class="tabela__botoes-controle">
        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
    </td> 
  `
  linhaNovoCliente.innerHTML = conteudo
  
  return linhaNovoCliente
}

const tabela = document.querySelector('[data-tabela]')

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {

    const http = new XMLHttpRequest()
    http.open('GET', 'http://localhost:3000/profile')
    
    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response))
      } else {
        resolve(JSON.parse(http.response))
      }
    }

    http.send()
  })

  console.log(promise)
  return promise
} 


listaClientes()
  .then(data => {
    data.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
    })
  })