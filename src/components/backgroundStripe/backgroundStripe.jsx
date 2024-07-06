import { twMerge } from 'tailwind-merge';

const justifyValues = { /* Utilizados para controlar o alinhamento dos itens  */
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

export const BackgroundStripe = ({
  justify = 'start',
  children,
}) => {
  return (
    <div className="w-full min-h-[82px] bg-[#0000000D] p-5 flex items-center" /* Medidas e cor do Background com degrade da ba barra
    de pesquisa, produtos mais vendidos e rodapé com info do frete*/>
      <div className={twMerge(
        'w-full max-w-[1050px] mx-auto flex flex-row items-center', /* Tamanho máximo e alinhamento dos itens*/
        justifyValues[justify],
      )}>
        {children}
      </div>
    </div>
  );
}
