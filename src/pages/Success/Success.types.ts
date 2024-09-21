import { UnitedAvailableBadgeColors } from '@/components/Badge/Badge.types';
import { Icon, IconWeight } from '@phosphor-icons/react';

export interface DeliveryInfos {
  title: string;
  content: string;
  color: UnitedAvailableBadgeColors;
  icon: Icon;
  weight?: IconWeight;
}
