import { toBRL } from "../../utils/numberUtils";
/*Exportando os valores */
export const CheckoutSummary = ({
  subtotal,
  shipping,
  cupon,
}) => {
  /* Sumário do Checkout */
  return (
    <div className="w-[330px] p-5" /*Largura grid do sumário*/>
      <p className="font-bold text-lg leading-6 mb-7">
        Resumo
      </p>

      <div className="w-[calc(100%+40px)] h-0.5 -ml-5 bg-black" /* Linha entre Resumo e Sub-total*/ />

      <div className="w-full px-[10px]" /*Largura grid sumário*/>
        <div className="w-full py-[10px] flex flex-row items-center justify-between text-lg leading-6" /*Altura grid sumário*/>
          <p className="font-light">Sub-total</p>
          <span className="font-bold">{toBRL(subtotal)}</span>
        </div>
        <div className="w-full py-[10px] flex flex-row items-center justify-between text-lg leading-6" /*Gap entre linha do Sub-total e Cupom*/>
          <p className="font-light">Cupom</p>
          <span className="font-bold">{cupon}</span>
        </div>
        <div className="w-full py-[10px] flex flex-row items-center justify-between text-lg leading-6" /*Gap entre linhas do Cupom e Frete*/>
          <p className="font-light">Frete</p>
          <span className="font-bold">{toBRL(shipping)} </span>
        </div>
      </div>

      <div className="w-[calc(100%+40px)] h-0.5 -ml-5 bg-black" /*Linha entre Frete e Total*//>

      <div className="w-full flex flex-row items-center justify-between py-5 px-[10px] text-lg leading-6">
        <p className="font-semibold">Total</p>
        <span className="font-bold">{toBRL(subtotal + shipping)}</span>
      </div>
    </div>
  );
}
