import { produce } from 'immer';

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

    case 'update_product_quantity': {
      if (!('currentQuantity' in action.payload)) return state;

      const { id, currentQuantity } = action.payload;

      const nextState = produce(state, (draftState) => {
        const productPosition = state.findIndex((product) => product.id === id);

        draftState[productPosition].currentQuantity = currentQuantity;
      });

      return nextState;
    }

    default:
      return state;
  }
}
