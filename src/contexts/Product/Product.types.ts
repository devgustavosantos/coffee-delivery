import { ReactNode } from 'react';

import { Product } from '@/types/product';

interface ProductProviderProps {
  children: ReactNode;
  id: number;
}

interface ProductContextType {
  infos: Product;
  currentQuantity: number;
  handleCurrentQuantity: (toAdd?: boolean) => void;
}

export type { ProductProviderProps, ProductContextType };
