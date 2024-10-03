import { useState } from 'react';
import { toast } from 'react-toastify';

import { useStockContext } from '@/contexts/Stock';

import { ProductContext } from './';
import {
  HandleCurrentQuantityOption,
  ProductProviderProps,
} from './Product.types';

const MIN_NUMBER_OF_PRODUCTS = 1;

export function ProductProvider({ children, id }: ProductProviderProps) {
  const [currentQuantity, setCurrentQuantity] = useState(
    MIN_NUMBER_OF_PRODUCTS,
  );

  const { products } = useStockContext();

  const currentProduct = products.find((product) => product.id === id);

  if (!products.length || !currentProduct) return null;

  const quantityAvailable = currentProduct.quantity;

  function handleCurrentQuantity(currentOption: HandleCurrentQuantityOption) {
    const optionsAllowed = {
      increment: function () {
        if (currentQuantity >= quantityAvailable) {
          toast.warning('O número máximo de produtos foi alcançado.');

          return;
        }

        setCurrentQuantity((prev) => prev + 1);
      },
      decrement: function () {
        if (currentQuantity <= MIN_NUMBER_OF_PRODUCTS) {
          toast.warning(
            `O número mínimo de produtos deve ser ${MIN_NUMBER_OF_PRODUCTS}.`,
          );

          return;
        }

        setCurrentQuantity((prev) => prev - 1);
      },
      reset: function () {
        setCurrentQuantity(MIN_NUMBER_OF_PRODUCTS);
      },
    };

    optionsAllowed[currentOption]();
  }

  return (
    <ProductContext.Provider
      value={{ infos: currentProduct, currentQuantity, handleCurrentQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
}
