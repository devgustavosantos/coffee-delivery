import { produce } from 'immer';
import superjson from 'superjson';

import { CartAction, CartState, PayloadToAddOrUpdate } from '@/types/cart';
import { LOCAL_STORAGE_KEY } from '@/utils/constants';

export function reducer(state: CartState, action: CartAction): CartState {
  function payloadToAddOrUpdate(payload: PayloadToAddOrUpdate) {
    if (!payload) return false;

    if (!('currentQuantity' in payload)) return false;

    return payload;
  }

  switch (action.type) {
    case 'add_to_cart': {
      const payload = payloadToAddOrUpdate(action.payload);
      if (!payload) return state;

      const nextState = [...state, payload];

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
      const payload = payloadToAddOrUpdate(action.payload);
      if (!payload) return state;

      const { id, currentQuantity } = payload;

      const nextState = produce(state, (draftState) => {
        const productPosition = state.findIndex((product) => product.id === id);

        draftState[productPosition].currentQuantity = currentQuantity;
      });

      localStorage.setItem(LOCAL_STORAGE_KEY, superjson.stringify(nextState));

      return nextState;
    }

    case 'clean_cart': {
      localStorage.removeItem(LOCAL_STORAGE_KEY);

      return [];
    }

    default:
      return state;
  }
}
