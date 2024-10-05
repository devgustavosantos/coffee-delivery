import { ReactNode } from 'react';

import { Product } from '@/types/product';

interface ProductProviderProps {
  children: ReactNode;
  id: number;
}

type HandleCurrentQuantityOption = 'increment' | 'decrement' | 'reset';

interface ProductContextType {
  infos: Product;
}

export type {
  ProductProviderProps,
  ProductContextType,
  HandleCurrentQuantityOption,
};
