import { BackgroundStripe } from '../components/backgroundStripe';
import { SiteHeader } from '../components/siteHeader';
import { SiteFooter } from '../components/siteFooter';
import { CheckoutSteps } from '../components/checkoutSteps';
import { CheckoutProductCard } from '../components/checkoutProductCard';
import { CheckoutSummary } from '../components/checkoutSummary';
import { twMerge } from 'tailwind-merge';
import { useContext, useMemo } from "react";
import { CartContext } from '../contexts/cartContext';

export const CheckoutPage = () => {
  const { cart: products, removeAll } = useContext(CartContext);

  const subtotalPrice = useMemo(() =>
    products.reduce((acc, product) => acc + product.price * product.quantity, 0), [products])

  return (
    <div>
      <SiteHeader />

      <BackgroundStripe justify='center'>
        <CheckoutSteps />
      </BackgroundStripe>

      {products.length === 0 && (
        <div className='flex justify-center items-center h-[50vh]'>
          <p className='text-black text-opacity-40 text-2xl'>
            Seu carrinho está vazio
          </p>
        </div>
      )}

      {products.length > 0 && (
        <>
          <div className={twMerge(
            'flex flex-wrap justify-between max-w-[1050px] mx-auto mt-5 mb-10',
          )}>
            <div className='ml-5'>
              <p className='font-bold text-lg leading-6'> 
                Itens adicionados ao seu carrinho 
              </p>
              <div className='mt-5 space-y-3'>
                {products.map((product, index) => (/* Produtos que foram adicionados do carrinho*/
                  <CheckoutProductCard
                    key={index} 
                    product={product}
                  />
                ))}
              </div>
            </div>

            <div className='px-5 lg:-mt-5 lg:pr-0 ml-auto'>
              <CheckoutSummary subtotal={subtotalPrice} shipping={subtotalPrice >= 49 ? 0 : 10} /> 
            </div>
          </div>
                
          <div className='mb-5'>
            <BackgroundStripe justify='center'>
              <div className='flex max-w-[1050px] w-full py-5'>
                <button
                  className='flex-grow bg-[#CD0000] text-white mr-[6px] rounded-lg py-[6px]' /* Background e cor do texo do botão de remover tudo */
                  onClick={removeAll}
                >
                  Remover todos
                </button>

                <button
                  className='flex-grow bg-[#000000] text-white ml-[6px] rounded-lg py-[6px]' /* Backgroud e cor do texto do botão de Finalizar Compra*/
                  onClick={() => alert('Compra finalizada!')}
                >
                  Finalizar compra
                </button>
              </div>
            </BackgroundStripe>
          </div>
        </>
      )}

      <SiteFooter />
    </div>
  );
}
