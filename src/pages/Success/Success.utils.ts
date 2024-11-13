import { FormType } from '@/types/form';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

import { SUCCESS_INFOS } from './Success.infos';
import { OrderInfos, PaymentMethodLabels } from './Success.types';

const { CASH, CREDIT_CARD, DEBIT_CART, SHIPPING, PREVISION, PAYMENT } =
  SUCCESS_INFOS;

export function formatOrderInfos({
  street,
  number,
  complement,
  neighborhood,
  city,
  state,
  paymentMethod,
}: FormType) {
  const address = `${street}, ${number} ${complement ? ', ' + complement : ''} - ${neighborhood} - ${city}, ${state}`;

  const paymentsMethodsLabel: PaymentMethodLabels = {
    cash: CASH,
    creditCard: CREDIT_CARD,
    debitCard: DEBIT_CART,
  };

  const orderInfosFormatted: OrderInfos[] = [
    {
      title: SHIPPING,
      content: address,
      icon: MapPin,
      color: 'PRIMARY',
    },
    {
      title: PREVISION.TITLE,
      content: PREVISION.CONTENT,
      icon: Timer,
      color: 'SECONDARY',
    },
    {
      title: PAYMENT,
      content: paymentsMethodsLabel[paymentMethod],
      icon: CurrencyDollar,
      color: 'TERTIARY',
      weight: 'bold',
    },
  ];

  return orderInfosFormatted;
}
