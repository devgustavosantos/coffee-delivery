import { Bank, CreditCard, Money } from '@phosphor-icons/react';

import { PAYMENT_INFOS } from './Payment.infos';
import { getIconCustom } from './Payment.styles';

const { CREDIT_CARD, DEBIT_CART, CASH } = PAYMENT_INFOS;

export const payments = [
  {
    value: 'creditCard',
    label: CREDIT_CARD,
    icon: getIconCustom(CreditCard),
  },
  {
    value: 'debitCard',
    label: DEBIT_CART,
    icon: getIconCustom(Bank),
  },
  {
    value: 'cash',
    label: CASH,
    icon: getIconCustom(Money),
  },
] as const;
