import { AvailableBadgeColors, Badge } from '@/types/badge';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

interface Benefits extends Badge {
  content: string;
}

const { PRIMARY, SECONDARY, TERTIARY, QUATERNARY } = AvailableBadgeColors;

export const benefits: Benefits[] = [
  {
    content: 'Compra simples e segura',
    icon: ShoppingCart,
    color: PRIMARY,
  },
  {
    content: 'Embalagem mantém o café intacto',
    icon: Package,
    color: QUATERNARY,
  },
  { content: 'Entrega rápida e rastreada', icon: Timer, color: SECONDARY },
  {
    content: 'O café chega fresquinho até você',
    icon: Coffee,
    color: TERTIARY,
  },
];
