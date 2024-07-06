import { useState } from "react";
import { CheckoutBlock } from "../checkoutBlock";

export const CheckoutSteps = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  /* Passos do carrinho de compras */
  return (
    <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-0">
      <CheckoutBlock text="1. Seu carrinho" isSelected={selectedStep === 0} />
      <CheckoutBlock text="2. Detalhes do envio" isSelected={selectedStep === 1} />
      <CheckoutBlock text="3. Opções de pagamento" isSelected={selectedStep === 2} />
    </div>
  );
}
