import { HomePage } from './pages/home'
import { CheckoutPage } from './pages/checkout'
import { CartProvider } from './contexts/cartContext'
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient() /* Gerencia e sincroniza os dados */

function App() {
  return (
    <div>
      <CartProvider /* Fornecendo o contexto do carrinho a todos os componentes filhos */> 
        <QueryClientProvider client={queryClient} /* Fornece o cliente de consulta */>
          <BrowserRouter /* Habilita o roteamento com base no navegador*/ >
            <Switch /* Renderiza a primeira rota que corresponde á localização atual */ >
              <Route path="/" exact>
                <HomePage  /* Define a rota para a página inicial */ />
              </Route>
              <Route path="/checkout">
                <CheckoutPage /* Define a rota para a página de Checkout */ />
              </Route>
            </Switch>
          </BrowserRouter>
        </QueryClientProvider>
      </CartProvider>
    </div>
  )
}

export default App
