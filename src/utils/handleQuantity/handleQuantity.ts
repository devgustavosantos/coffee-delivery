import { toast } from 'react-toastify';

import { MIN_NUMBER_OF_PRODUCTS } from '../constants';
import { HandleQuantityProps } from './handleQuantity.types';

export function handleQuantity() {
  function increment({
    currentQuantity,
    quantityAvailable,
  }: HandleQuantityProps) {
    if (currentQuantity >= quantityAvailable) {
      toast.warning('O número máximo foi alcançado.');

      return currentQuantity;
    }

    return ++currentQuantity;
  }

  function decrement({ currentQuantity }: HandleQuantityProps) {
    if (currentQuantity <= MIN_NUMBER_OF_PRODUCTS) {
      toast.warning(`O número mínimo deve ser ${MIN_NUMBER_OF_PRODUCTS}.`);

      return currentQuantity;
    }

    return --currentQuantity;
  }

  return {
    increment,
    decrement,
  };
}
