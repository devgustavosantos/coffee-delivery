import { useState } from 'react';
import { toast } from 'react-toastify';

import { useCartContext, useProductContext } from '@/contexts';
import { MIN_NUMBER_OF_PRODUCTS } from '@/utils/constants';
import { handleQuantity } from '@/utils/handleQuantity';

export function useProduct() {
  const [currentQuantity, setCurrentQuantity] = useState(
    MIN_NUMBER_OF_PRODUCTS,
  );

  const { dispatch, items } = useCartContext();

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
    setCurrentQuantity(MIN_NUMBER_OF_PRODUCTS);

    const isProductAlreadyAdd = items.find(
      (product) => product.id === infos.id,
    );

    if (isProductAlreadyAdd) {
      toast.warning('Este produto já está carrinho!');

      return;
    }

    dispatch({
      type: 'add_to_cart',
      payload: { id: infos.id, currentQuantity },
    });

    toast.success('Produto adicionado ao carrinho!');
  }

  return {
    currentQuantity,
    handleProductQuantity,
    handleAddToCart,
    price: infos.price,
  };
}
