import { useReducer } from 'react';

import { Cart } from '@/reducers';

import { CartContext } from '.';
import { useStockContext } from '../Stock';
import { CART_INFOS } from './Cart.infos';
import { CartItemComplete, CartProviderProps } from './Cart.types';

const { ERROR_IN_STOCK } = CART_INFOS;

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

    if (!itemInStock) throw new Error(ERROR_IN_STOCK);

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
