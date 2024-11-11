import SuperJSON from 'superjson';

import { CART_INFOS } from '@/contexts/Cart/Cart.infos';
import { CartState } from '@/types/cart';
import { LOCAL_STORAGE_KEY } from '@/utils/constants';

const { ERROR_IN_CONVERSION } = CART_INFOS;

export function init(initialState: CartState): CartState {
  const cartInMemory = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!cartInMemory) return initialState;

  try {
    const cartParsed = SuperJSON.parse<CartState>(cartInMemory);

    const isAValidCart = cartParsed.every(
      ({ id, currentQuantity }) => id >= 1 && currentQuantity >= 1,
    );

    return isAValidCart ? cartParsed : initialState;
  } catch (error) {
    console.error('>>> ' + ERROR_IN_CONVERSION, error);

    return initialState;
  }
}
