import { BackgroundStripe } from '../components/backgroundStripe';
import { SiteHeader } from '../components/siteHeader';
import { SearchBar } from '../components/searchBar';
import { SiteFooter } from '../components/siteFooter';
import { ProductCardGrid } from '../components/productCardGrid';
import { LoadingSpinner } from '../components/loadingSpinner';
import { useProducts } from '../hooks/useProducts';
import { useEffect, useRef, useState, useCallback } from 'react';

export const HomePage = () => {
  const [originalProducts, setOriginalProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [mostSaledProducts, setMostSaledProducts] = useState([])

  const timerRef = useRef(null)

  const { data, isLoading, isError, isSuccess } = useProducts()

  useEffect(() => {
    if (!isSuccess) return;

    setOriginalProducts(data || [])
    setFilteredProducts(data || [])

    const mostSaled = data.sort((a, b) => b.sales - a.sales).slice(0, 3)
    setMostSaledProducts(mostSaled)
  }, [data, isSuccess])

  const handleSearchChange = useCallback((value) => {
    if (!originalProducts || originalProducts.length === 0) return;

    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      const filtered = originalProducts.filter(product => {
        return product.title.toLowerCase().includes(value.toLowerCase())
      })

      setFilteredProducts(filtered)
    }, 600)
  }, [originalProducts])

  return (
    <div>
      <SiteHeader />

      <BackgroundStripe justify='center'>
        <SearchBar onChange={handleSearchChange} />
      </BackgroundStripe>

      <div className='my-3'>
        {filteredProducts.length > 0 && <ProductCardGrid products={filteredProducts} />}
        {((isSuccess && data.length === 0) || filteredProducts.length === 0) &&
          <p className='mx-auto'>Nenhum produto encontrado</p>
        }
        {isLoading && <LoadingSpinner />}
        {isError && <p>Erro ao carregar produtos</p>}
      </div>

      <BackgroundStripe>
        <div>
          <p className='text-[#FF6C6C] text-lg font-bold leading-6'>
            Produtos mais vendidos
          </p>
          <p className='text-[#000000] text-opacity-50 text-base leading-4'>
            Pode ser de seu interesse!
          </p>
        </div>
      </BackgroundStripe>

      <div className='my-3'>
        {mostSaledProducts.length > 0 && <ProductCardGrid products={mostSaledProducts} />}
        {isSuccess && data.length === 0 && <p>Nenhum produto encontrado</p>}
        {isLoading && <LoadingSpinner />}
        {isError && <p>Erro ao carregar produtos</p>}
      </div>

      <BackgroundStripe justify='center'>
        <div className='p-5 h-fit w-fit bg-gradient-to-b from-white to-transparent rounded-md'>
          <p className='text-[32px] font-light text-black text-opacity-50 leading-8'>
            Frete grátis para pedidos maior que R$49,00
          </p>
        </div>
      </BackgroundStripe>

      <SiteFooter />
    </div>
  )
}
