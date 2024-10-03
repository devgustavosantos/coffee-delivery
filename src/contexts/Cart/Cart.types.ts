import { ReactNode } from 'react';

import { CartAction, CartItem } from '@/types/Cart';

type CartContextType = {
  items: CartItem[];
  dispatch: (value: CartAction) => void;
};

interface CartProviderProps {
  children: ReactNode;
}

export type { CartContextType, CartProviderProps };
