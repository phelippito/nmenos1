import { twMerge } from "tailwind-merge";

export const CheckoutBlock = ({
  isSelected,
  text,
}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <p className={twMerge(
        'font-bold text-xl leading-6 text-black w-fit',
        !isSelected && 'text-opacity-30',
      )}>
        {text}
      </p>
    </div>
  );
}
