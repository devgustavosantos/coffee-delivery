import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import { Benefits } from './Home.types';

export const benefits: Benefits[] = [
  {
    content: 'Compra simples e segura',
    icon: ShoppingCart,
    color: 'PRIMARY',
  },
  {
    content: 'Embalagem mantém o café intacto',
    icon: Package,
    color: 'QUATERNARY',
  },
  { content: 'Entrega rápida e rastreada', icon: Timer, color: 'SECONDARY' },
  {
    content: 'O café chega fresquinho até você',
    icon: Coffee,
    color: 'TERTIARY',
  },
];
