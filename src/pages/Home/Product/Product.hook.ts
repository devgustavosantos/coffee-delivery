import { useState } from 'react';
import { toast } from 'react-toastify';

import { useCartContext, useProductContext } from '@/contexts';
import { MIN_NUMBER_OF_PRODUCTS } from '@/utils/constants';
import { handleQuantity } from '@/utils/handleQuantity';

export function useProduct() {
  const [currentQuantity, setCurrentQuantity] = useState(
    MIN_NUMBER_OF_PRODUCTS,
  );

  const { dispatch } = useCartContext();

  const { infos } = useProductContext();

  function handleProductQuantity(isIncrement: boolean) {
    const { increment, decrement } = handleQuantity();

    const optionChoose = isIncrement ? increment : decrement;

    const quantityUpdate = optionChoose({
      currentQuantity: currentQuantity,
      quantityAvailable: infos.quantity,
    });

    setCurrentQuantity(quantityUpdate);
  }

  function handleAddToCart() {
    dispatch({
      type: 'add_to_cart',
      payload: { id: infos.id, currentQuantity },
    });

    setCurrentQuantity(MIN_NUMBER_OF_PRODUCTS);

    toast.success('Produto adicionado ao carrinho!');
  }

  return { currentQuantity, handleProductQuantity, handleAddToCart };
}
