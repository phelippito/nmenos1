import React, { createContext, useState } from 'react';

export const CartContext = createContext(); /* Compartilhar o estado do carrinho em toda a lista de componentes */

export const CartProvider = ({ children }) => { /* Define um componente que ficará como provedor de contexto para o CartProvider */
  const [cart, setCart] = useState([]) /* Usa o hook useState para criar o estado do cart em lista de produtos no carrinho  */

  const changeQuantity = (productId, newQuantity) => { /* Função que altera quantidade de produto no carrinho */
    const rawCart = [...cart]

    for (let i = 0; i < rawCart.length; i++) {
      if (rawCart[i].id === productId && newQuantity > 0) {
        rawCart[i].quantity = newQuantity
        setCart(rawCart)
        return;
      }
    }
  }

  const addToCart = (product) => { /* Função par adicionar produtos ao carrinho */
    const rawCart = [...cart]

    for (let i = 0; i < rawCart.length; i++) {
      if (rawCart[i].id === product.id) {
        rawCart[i].quantity += 1
        setCart(rawCart)
        return;
      }
    }

    setCart([...rawCart, {
      ...product,
      quantity: 1
    }])
  }

  const removeFromCart = (productId) => { /* Função para remover um produto do carrinho */
    const newCart = cart.filter(product => product.id !== productId)
    setCart(newCart)
  }

  const removeAll = () => { /* Função para esvaziar o carrinho */
    setCart([])
  }

  return (
    <CartContext.Provider value={{ /* O provedor fornece o estado do carrinho e funções para qualquer componente que assumir este contexto */
      cart,
      changeQuantity,
      addToCart,
      removeFromCart,
      removeAll,
    }}>
      {children}
    </CartContext.Provider>
  )
}