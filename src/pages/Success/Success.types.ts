import { UnitedAvailableBadgeColors } from '@/components/Badge/Badge.types';
import { FormType } from '@/types/form';
import { Icon, IconWeight } from '@phosphor-icons/react';

interface OrderInfos {
  title: string;
  content: string;
  color: UnitedAvailableBadgeColors;
  icon: Icon;
  weight?: IconWeight;
}

type PaymentMethodLabels = {
  [K in FormType['paymentMethod']]: string;
};

export type { OrderInfos, PaymentMethodLabels };
