import { CartAction, CartState } from '@/types/Cart';

export function reducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case 'add_to_cart':
      if (!action.payload) return state;

      return [...state, action.payload];
    default:
      return state;
  }
}
