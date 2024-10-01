import { useState } from 'react';

import { ProductContext } from './';
import { ProductProviderProps } from './Product.types';

export function ProductProvider({ children }: ProductProviderProps) {
  const [currentQuantity, setCurrentQuantity] = useState(0);

  function handleCurrentQuantity(toAdd?: boolean) {
    if (toAdd) {
      setCurrentQuantity((prev) => prev + 1);

      return;
    }

    if (currentQuantity <= 0) return;

    setCurrentQuantity((prev) => prev - 1);
  }

  return (
    <ProductContext.Provider value={{ currentQuantity, handleCurrentQuantity }}>
      {children}
    </ProductContext.Provider>
  );
}
