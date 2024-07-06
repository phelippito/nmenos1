import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from '../../contexts/cartContext';

export const SiteHeader = () => {
  const { cart } = useContext(CartContext);

  return (/*Divs Header - tamanhos mínimos e máximos e alinhamento dos itens */
    <div className="w-full min-h-[124px] px-[30px] flex items-center">
      <div className="w-full max-w-[1050px] flex flex-row justify-between items-center mx-auto">
        <Link to="/">
          <button
            className="rounded-[20px] border-2 border-[#0000000D]" /* Borda em volta logo do site - btn */
            onClick={() => { }}
          >
            <img src="/logo.svg" alt="Logo do site" /* Logo do site */ />
          </button>
        </Link>

        <Link to="/checkout">
          <button
            className="bg-[#0000000D] rounded-[20px] flex items-center justify-center" /* Background btn carrinho */
            onClick={() => { }}
          >
            <img src="/cart.svg" alt="Carrinho" />
            {cart.length > 0 && (
              <span className="text-[#FF6C6C] text-xl font-bold leading-6 -ml-4 mr-5">
                ({cart.length})
              </span> /* Cor do número de itens no carrinho */
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}
