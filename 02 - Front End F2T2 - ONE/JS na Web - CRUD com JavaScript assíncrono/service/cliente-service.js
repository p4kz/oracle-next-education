
// Fazendo conexão com api
const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`) 
    .then(resposta => {
      return resposta.json()
    })
} 

export const clienteService = {
  listaClientes
}
