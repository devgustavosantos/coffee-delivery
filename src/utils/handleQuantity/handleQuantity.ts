import { toast } from 'react-toastify';

import { MIN_NUMBER_OF_PRODUCTS } from '../constants';
import { HANDLE_QUANTITY_INFOS } from './handleQuantity.infos';
import { HandleQuantityProps } from './handleQuantity.types';

const { FIRST_WARNING, SECOND_WARNING } = HANDLE_QUANTITY_INFOS;

export function handleQuantity() {
  function increment({
    currentQuantity,
    quantityAvailable,
  }: HandleQuantityProps) {
    if (currentQuantity >= quantityAvailable) {
      toast.warning(FIRST_WARNING);

      return currentQuantity;
    }

    return ++currentQuantity;
  }

  function decrement({ currentQuantity }: HandleQuantityProps) {
    if (currentQuantity <= MIN_NUMBER_OF_PRODUCTS) {
      toast.warning(`${SECOND_WARNING} ${MIN_NUMBER_OF_PRODUCTS}.`);

      return currentQuantity;
    }

    return --currentQuantity;
  }

  return {
    increment,
    decrement,
  };
}
