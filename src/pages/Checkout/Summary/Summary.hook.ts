import { useCartContext, useFormContext } from '@/contexts';
import {
  SHIPPING_PRICE,
  CASH_PAYMENT_DISCOUNT_PERCENTAGE,
} from '@/utils/constants';
import { getBRLPrice } from '@/utils/getBRLPrice';

export function useSummary() {
  const {
    totals: { price },
    items,
  } = useCartContext();

  const { paymentMethodWatch } = useFormContext();

  const totalItemsFormatted = getBRLPrice(price);

  const shippingPriceFormatted = getBRLPrice(SHIPPING_PRICE);

  const totalOrderValue = (() => {
    const rawTotal = price + SHIPPING_PRICE;

    if (paymentMethodWatch !== 'cash') return rawTotal;

    const totalWithDiscount =
      rawTotal - rawTotal * (CASH_PAYMENT_DISCOUNT_PERCENTAGE / 100);

    return totalWithDiscount;
  })();

  const totalOrderValueFormatted = getBRLPrice(totalOrderValue);

  return {
    items,
    totalItemsFormatted,
    shippingPriceFormatted,
    totalOrderValueFormatted,
  };
}
