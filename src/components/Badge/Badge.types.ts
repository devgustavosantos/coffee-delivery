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

interface BadgeContainerProps {
  color: keyof typeof AvailableBadgeColors;
}

interface BadgeProps extends BadgeContainerProps {
  icon: Icon;
}

export type { BadgeProps, BadgeContainerProps, BadgeColors };
