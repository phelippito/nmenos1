import { ProductCard } from "../productCard";

export const ProductCardGrid = ({ /* Produtos a serem renderizados no grid */
  products,
}) => {
  if (products.length === 0) /* Se a lista estiver vazia retorna NULL e não mostra nada */
    return null;

  return ( /* Grid dos produtos */
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
