import { createContext, useContext } from 'react';

import { CartContextType } from './Cart.types';

const CartContext = createContext({} as CartContextType);
const useCartContext = () => useContext(CartContext);

export { CartContext, useCartContext };
export { CartProvider } from './Cart.provider';
