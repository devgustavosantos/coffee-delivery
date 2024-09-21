import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

import { DeliveryInfos } from './Success.types';

export const deliveryInfos: DeliveryInfos[] = [
  {
    title: 'Entrega em:',
    content: 'Rua João Daniel Martinelli, 102 - Farrapos - Porto Alegre, RS',
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
    content: 'Cartão de Crédito',
    icon: CurrencyDollar,
    color: 'TERTIARY',
    weight: 'bold',
  },
];
