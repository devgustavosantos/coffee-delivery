import { GlobalState } from 'little-state-machine';

import { FormType } from '@/types/form';

export function updateAction(state: GlobalState, payload: FormType) {
  return {
    ...state,
    data: {
      ...payload,
    },
  };
}
