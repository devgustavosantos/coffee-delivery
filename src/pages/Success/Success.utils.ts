import { FormType } from '@/types/form';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

import { OrderInfos, PaymentMethodLabels } from './Success.types';

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
    cash: 'Dinheiro',
    creditCard: 'Cartão de Crédito',
    debitCard: 'Cartão de Débito',
  };

  const orderInfosFormatted: OrderInfos[] = [
    {
      title: 'Entrega em:',
      content: address,
      icon: MapPin,
      color: 'PRIMARY',
    },
    {
      title: 'Previsão de entrega:',
      content: '20 min - 30 min',
      icon: Timer,
      color: 'SECONDARY',
    },
    {
      title: 'Pagamento na entrega com:',
      content: paymentsMethodsLabel[paymentMethod],
      icon: CurrencyDollar,
      color: 'TERTIARY',
      weight: 'bold',
    },
  ];

  return orderInfosFormatted;
}
