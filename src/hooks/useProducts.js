import { useQuery } from 'react-query'
import { getAllProducts } from '../services/getProducts'

export const useProducts = () => {
  const productsQuery = useQuery('products', getAllProducts, { retry: false }) /*Chave de produt / função que requisita os dados /
  Indica que a Query não deve tentar refazer a aquisição de dados em caso de falha no carregamento */

  return {
    data: productsQuery.data, /* Caso produtos não estiverem disponíveis */
    isLoading: productsQuery.isLoading, /* Requisição em andamento */
    isError: productsQuery.isError, /* Indica erro na requisição */
    isSuccess: productsQuery.isSuccess, /* Requisição bem sucedida */
  }
}