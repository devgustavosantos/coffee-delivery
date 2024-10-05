import { ReactNode } from 'react';

import { CartAction, CartItemComplete } from '@/types/Cart';

type CartContextType = {
  items: CartItemComplete[];
  dispatch: (value: CartAction) => void;
};

interface CartProviderProps {
  children: ReactNode;
}

export type { CartContextType, CartProviderProps };
