import { COLORS } from '@/styles';
import { Icon } from '@phosphor-icons/react';

type ColorsKeys = keyof typeof COLORS;

enum AvailableBadgeColors {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  QUATERNARY = 'QUATERNARY',
}

type BadgeColors = {
  [K in AvailableBadgeColors]: ColorsKeys;
};

interface Badge {
  icon: Icon;
  color: keyof BadgeColors;
}

export type { Badge, BadgeColors };
export { AvailableBadgeColors };
