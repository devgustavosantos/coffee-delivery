import { ReactNode } from 'react';

import { CartAction, CartItemPartial } from '@/types/cart';

interface CartTotals {
  price: number;
  items: number;
}

interface CartItemComplete extends CartItemPartial {
  total: number;
}

type CartContextType = {
  items: CartItemComplete[];
  totals: CartTotals;
  dispatch: (value: CartAction) => void;
};

interface CartProviderProps {
  children: ReactNode;
}

export type { CartContextType, CartProviderProps, CartItemComplete };
