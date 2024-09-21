import { BadgeProps } from '@/components/Badge/Badge.types';
import { Product, Tag } from '@/types/product';

interface ProductRaw extends Omit<Product, 'tags'> {
  tags: number[];
}
type FetchInfosResponse = ProductRaw[] | Tag[];

interface Benefits extends BadgeProps {
  content: string;
}

export type { FetchInfosResponse, Benefits };
