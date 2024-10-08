import { useReducer } from 'react';

import { Cart } from '@/reducers';

import { CartContext } from '.';
import { useStockContext } from '../Stock';
import { CartItemComplete, CartProviderProps } from './Cart.types';

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(
    Cart.reducer,
    Cart.initialState,
    Cart.init,
  );

  const { products } = useStockContext();

  if (products.length <= 0) return null;

  const stateComposed: CartItemComplete[] = state.map((item) => {
    const itemInStock = products.find((product) => product.id === item.id);

    if (!itemInStock) throw new Error('An item in the cart is out of stock!');

    return {
      ...item,
      total: item.currentQuantity * itemInStock.price,
    };
  });

  const items = state.reduce(
    (accumulator, currentValue) => accumulator + currentValue.currentQuantity,
    0,
  );

  const price = stateComposed.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: stateComposed,
        totals: { items, price },
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
