import { Bank, CreditCard, Money } from '@phosphor-icons/react';

import { getIconCustom } from './Payment.styles';

export const payments = [
  {
    value: 'creditCard',
    label: 'Cartão de Crédito',
    icon: getIconCustom(CreditCard),
  },
  { value: 'debitCard', label: 'Cartão de Débito', icon: getIconCustom(Bank) },
  { value: 'cash', label: 'Dinheiro', icon: getIconCustom(Money) },
] as const;
