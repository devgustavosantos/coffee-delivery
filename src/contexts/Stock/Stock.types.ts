import { ReactNode } from 'react';

import { Product, Tag } from '@/types/product';

interface ProductRaw extends Omit<Product, 'tags'> {
  tags: number[];
}

type FetchInfosResponse = ProductRaw[] | Tag[];

interface StockContextType {
  products: Product[];
}

interface StockProviderProps {
  children: ReactNode;
}

export type { FetchInfosResponse, StockContextType, StockProviderProps };
