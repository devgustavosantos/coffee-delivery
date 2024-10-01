import { ReactNode } from 'react';

interface ProductProviderProps {
  children: ReactNode;
  quantityAvailable: number;
}

interface ProductContextType {
  currentQuantity: number;
  handleCurrentQuantity: (toAdd?: boolean) => void;
}

export type { ProductProviderProps, ProductContextType };
