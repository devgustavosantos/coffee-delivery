import { useStockContext } from '@/contexts/Stock';

import { ProductContext } from './';
import { ProductProviderProps } from './Product.types';

export function ProductProvider({ children, id }: ProductProviderProps) {
  const { products } = useStockContext();

  const currentProduct = products.find((product) => product.id === id);

  if (!products.length || !currentProduct) return null;

  return (
    <ProductContext.Provider value={{ infos: currentProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
