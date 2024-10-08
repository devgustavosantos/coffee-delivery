import { getBRLPrice } from '@/utils/getBRLPrice';

import { UsePriceType } from './Price.types';

export function usePrice({ value }: UsePriceType) {
  const valueFormatted = getBRLPrice(value);

  return { valueFormatted };
}
