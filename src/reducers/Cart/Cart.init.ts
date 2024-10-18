import SuperJSON from 'superjson';

import { CartState } from '@/types/cart';
import { LOCAL_STORAGE_KEY } from '@/utils/constants';

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
    console.error('>>> Error converting saved cart!', error);

    return initialState;
  }
}
