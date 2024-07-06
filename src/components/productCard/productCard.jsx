import { useContext, useMemo } from "react";
import { CartContext } from '../../contexts/cartContext';
import { toBRL } from "../../utils/numberUtils";

export const ProductCard = ({
  product
}) => {
  const {
    imageSrc,
    title,
    description,
    price,
    oldPrice
  } = product;
  const { addToCart } = useContext(CartContext);

  const discount = useMemo(() => oldPrice ? (oldPrice - price) / oldPrice * 100 : 0, [product]);

  return (/* Medidas card dos produtos - Cor do titulo - Cor da descrição - Cor do valor */
    <div className="w-[300px] flex flex-col h-auto border border-opacity-10 border-black rounded-md">
      <div className="h-[200px] w-full bg-black bg-opacity-5">
        <img className="h-full mx-auto" src={imageSrc} alt="Produto" /* Imagem do protudo */ />
      </div>

      <div className="px-3 py-5 h-full flex flex-col justify-between">
        <div className="space-y-3 mb-3">
          <p className="text-[#000000] font-bold leading-4 text-base" /* Cor do titulo do produto */ >
            {title}
          </p>
          <p className="text-[#000000] text-opacity-40 leading-4 text-xs" /* Cor do texto da descrição */>
            {description}
          </p>
          <p className="text-[#000000] font-medium leading-6 text-2xl" /* Cor do texto do valor */>
            {( toBRL(price)
            )}
          </p>
        </div>

        {/* Botão de adicionar ao carrinho - Cor da letra e background */}
        <button
          className="w-full text-white text-center p-2 bg-[#000000] rounded-lg"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
