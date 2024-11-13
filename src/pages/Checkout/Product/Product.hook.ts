import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import { useCartContext, useProductContext } from '@/contexts';
import { COLORS } from '@/styles';
import { handleQuantity } from '@/utils/handleQuantity/';

import { PRODUCT_INFOS } from './Product.infos';

const { TITLE, DESCRIPTION, CONFIRM, CANCEL, SUCCESS } = PRODUCT_INFOS;

export function useProduct() {
  const { infos } = useProductContext();
  const { items, dispatch } = useCartContext();

  const productInfosOnCart = items.find((products) => products.id === infos.id);

  if (!productInfosOnCart) return;

  const { total } = productInfosOnCart;

  function handleProductQuantity(isIncrement: boolean) {
    const { increment, decrement } = handleQuantity();

    const optionChoose = isIncrement ? increment : decrement;

    const quantityUpdate = optionChoose({
      currentQuantity: productInfosOnCart!.currentQuantity,
      quantityAvailable: infos.quantity,
    });

    dispatch({
      type: 'update_product_quantity',
      payload: {
        id: infos.id,
        currentQuantity: quantityUpdate,
      },
    });
  }

  function handleProductRemove() {
    Swal.fire({
      title: TITLE,
      text: DESCRIPTION,
      icon: 'warning',
      confirmButtonColor: COLORS.SECONDARY_800,
      confirmButtonText: CONFIRM,
      showCancelButton: true,
      cancelButtonColor: COLORS.BASE_700,
      cancelButtonText: CANCEL,
    }).then((result) => {
      if (!result.isConfirmed) return;

      dispatch({ type: 'remove_from_cart', payload: { id: infos.id } });

      toast.warning(SUCCESS);
    });
  }

  return {
    handleProductRemove,
    handleProductQuantity,
    productInfosOnCart,
    total,
  };
}
