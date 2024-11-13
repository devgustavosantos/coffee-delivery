import { createContext, useContext } from 'react';

import { ProductContextType } from './Product.types';

const ProductContext = createContext({} as ProductContextType);
const useProductContext = () => useContext(ProductContext);

export { ProductContext, useProductContext };
export { ProductProvider } from './Product.provider';
