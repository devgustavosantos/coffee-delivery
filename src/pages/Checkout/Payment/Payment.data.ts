import { Bank, CreditCard, Money } from '@phosphor-icons/react';

import { getIconCustom } from './Payment.styles';

export const payments = [
  { type: 'Cartão de Crédito', icon: getIconCustom(CreditCard) },
  { type: 'Cartão de Débito', icon: getIconCustom(Bank) },
  { type: 'Dinheiro', icon: getIconCustom(Money) },
] as const;
