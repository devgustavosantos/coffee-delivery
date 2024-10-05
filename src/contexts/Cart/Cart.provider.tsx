import { useReducer } from 'react';

import { Cart } from '@/reducers';

import { CartContext } from '.';
import { CartProviderProps } from './Cart.types';

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(
    Cart.reducer,
    Cart.initialState,
    Cart.init,
  );

  return (
    <CartContext.Provider value={{ items: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
