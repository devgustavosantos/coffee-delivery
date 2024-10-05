import { CartAction, CartState } from '@/types/Cart';

export function reducer(state: CartState, action: CartAction): CartState {
  if (!action.payload) return state;

  switch (action.type) {
    case 'add_to_cart': {
      if (!('currentQuantity' in action.payload)) return state;

      return [...state, action.payload];
    }

    case 'remove_from_cart': {
      const productsFiltered = state.filter(
        (product) => product.id !== action.payload?.id,
      );

      return [...productsFiltered];
    }

    default:
      return state;
  }
}
