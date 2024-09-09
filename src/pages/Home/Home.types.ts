import { Product, Tag } from '@/types/product';

interface ProductRaw extends Omit<Product, 'tags'> {
  tags: number[];
}

export type FetchInfosResponse = ProductRaw[] | Tag[];
