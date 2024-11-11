import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import { HOME_INFOS } from './Home.infos';
import { Benefits } from './Home.types';

const { ORDER, WRAPPER, SHIPPING, PRODUCT } = HOME_INFOS;

export const benefits: Benefits[] = [
  {
    content: ORDER,
    icon: ShoppingCart,
    color: 'PRIMARY',
  },
  {
    content: WRAPPER,
    icon: Package,
    color: 'QUATERNARY',
  },
  { content: SHIPPING, icon: Timer, color: 'SECONDARY' },
  {
    content: PRODUCT,
    icon: Coffee,
    color: 'TERTIARY',
  },
];
