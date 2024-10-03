import { toast } from 'react-toastify';

import { useCartContext, useProductContext } from '@/contexts';

export function useAddToCart() {
  const {
    currentQuantity,
    infos: { id },
  } = useProductContext();
  const { dispatch } = useCartContext();

  function handleAddToCart() {
    dispatch({
      type: 'add_to_cart',
      payload: { id, currentQuantity },
    });

    toast.success('Produto adicionado ao carrinho!');
  }

  return {
    handleAddToCart,
  };
}
