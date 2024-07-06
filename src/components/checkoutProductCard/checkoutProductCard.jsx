import { twMerge } from "tailwind-merge";
import { toBRL } from "../../utils/numberUtils";
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../../contexts/cartContext';

export const CheckoutProductCard = ({ /* Chamado para as informações do produto */
  product
}) => { 
  const {
    id,
    imageSrc,
    title,
    description,
    price,
    quantity
  } = product;

  const [showQuantityModal, setShowQuantityModal] = useState(false) /* Acesso para ajuste da quantidade de produtos */

  const { removeFromCart, changeQuantity } = useContext(CartContext); /* Acesso funções de remover e alterar quantidade do gerenciamento do carrinho */

  useEffect(() => { /* Cria um listner (click do mouse) */
    if (showQuantityModal) {
      const closeQuantityModal = (e) => { /* Se clicado fora do documento, retorna valor falso */
        setShowQuantityModal(false);
      }

      document.addEventListener('click', closeQuantityModal) /* Adicionar ao listner */
      return () => {
        document.removeEventListener('click', closeQuantityModal) /* Remover do listner*/
      }
    }
  }, [showQuantityModal])

  return (
    <div className={twMerge(
      'w-[650px] h-[175px] border border-opacity-10 border-[#000000] rounded-md', /* Largura e altura do grid do produto*/
      'flex flex-row'
    )}>
      <div className="h-full w-[240px] bg-[#000000] bg-opacity-5" /* Larguda do card imagem*/ >
        <img className="h-full mx-auto" src={imageSrc} alt="Produto" /* Altura do card imagem*/ />
      </div>

      <div className="h-full flex-grow px-5 flex flex-row justify-between items-center">
        <div className="space-y-3 mb-3">
          <p className="text-[#FF6C6C] font-bold leading-6 text-2xl" /* Valor do produto */ > 
            {toBRL(price)}
          </p>
          <p className="text-black font-bold leading-8 text-base" /* Texto Título do produto*/ >
            {title}
          </p>
          <p className="text-[#000000] text-opacity-40 text-xs leading-4" /* Texto Descrição do protudo */ >
            {description}
          </p>
        </div>

        <div className="flex flex-col items-end"> 
          <div className="flex flex-row space-x-2 items-center justify-between mb-2 relative" /*Medidas*/>
            <p className="text-xs leading-4 text-[#000000] text-opacity-40" /*Cor do texto do select de quantidade de itens*/> 
              Quantidade: {quantity} 
            </p>

            <button
              className={twMerge(
                'w-[36px] h-[36px] rounded-lg flex justify-center items-center', /*Tamanho do select de quantidade de itens */
                'border-2 border-[#000000] border-opacity-5',
              )}
              onClick={(e) => {
                e.stopPropagation();
                setShowQuantityModal(!showQuantityModal);
              }}
            >
              <img width={12} height={6} src="/Vector.svg" alt="Seta para baixo" /*icon da seta seletora de quantidade*//>
            </button>

            {showQuantityModal && ( /*Ação para selecionar a quantidade do mesmo produto que foi adicionado ao carrinho*/
              <div className="absolute right-0 top-10 w-[80px] bg-white divide-y-2 divide-gray-20000 rounded-lg border-2 border-black border-opacity-5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className="w-full text-center cursor-default hover:bg-black hover:bg-opacity-5"
                    onClick={() => {
                      changeQuantity(id, n);
                      setShowQuantityModal(false);
                    }}
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="w-[134px] text-white text-center p-2 bg-[#CD0000] rounded-lg" /*Cor do backgroud e texto do botão de excluir item*/
            onClick={() => removeFromCart(id)} 
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
