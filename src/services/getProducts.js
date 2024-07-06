import axios from 'axios' /* Biblioteca para requisição HTTP*/

export const getAllProducts = async () => { /* Função para ser utilizada em outros módulos*/ 
  const response = await axios.get(`${import.meta.env.VITE_SERVER_HOST}/products`) /* Armazena o endereço do servidor que contém os itens */
  return response.data /* Retorna os dados da resposta com os itens */
}