import { useState } from 'react';

import { ProductContext } from './';
import { ProductProviderProps } from './Product.types';

export function ProductProvider({
  children,
  quantityAvailable,
}: ProductProviderProps) {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  function handleCurrentQuantity(toAdd?: boolean) {
    function onAdd() {
      if (currentQuantity >= quantityAvailable) return;

      setCurrentQuantity((prev) => prev + 1);
    }

    function onRemove() {
      if (currentQuantity <= 1) return;

      setCurrentQuantity((prev) => prev - 1);
    }

    (toAdd ? onAdd : onRemove)();
  }

  return (
    <ProductContext.Provider value={{ currentQuantity, handleCurrentQuantity }}>
      {children}
    </ProductContext.Provider>
  );
}
