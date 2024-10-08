import { useCartContext } from '@/contexts';
import { getBRLPrice } from '@/utils/getBRLPrice';

export function useSummary() {
  const {
    totals: { price },
    items,
  } = useCartContext();

  const totalItemsFormatted = getBRLPrice(price);

  return { items, totalItemsFormatted };
}
