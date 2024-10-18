import { produce } from 'immer';
import superjson from 'superjson';

import { CartAction, CartState } from '@/types/cart';
import { LOCAL_STORAGE_KEY } from '@/utils/constants';

export function reducer(state: CartState, action: CartAction): CartState {
  if (!action.payload) return state;

  switch (action.type) {
    case 'add_to_cart': {
      if (!('currentQuantity' in action.payload)) return state;

      const nextState = [...state, action.payload];

      localStorage.setItem(LOCAL_STORAGE_KEY, superjson.stringify(nextState));

      return nextState;
    }

    case 'remove_from_cart': {
      const nextState = state.filter(
        (product) => product.id !== action.payload?.id,
      );

      localStorage.setItem(LOCAL_STORAGE_KEY, superjson.stringify(nextState));

      return nextState;
    }

    case 'update_product_quantity': {
      if (!('currentQuantity' in action.payload)) return state;

      const { id, currentQuantity } = action.payload;

      const nextState = produce(state, (draftState) => {
        const productPosition = state.findIndex((product) => product.id === id);

        draftState[productPosition].currentQuantity = currentQuantity;
      });

      localStorage.setItem(LOCAL_STORAGE_KEY, superjson.stringify(nextState));

      return nextState;
    }

    default:
      return state;
  }
}
