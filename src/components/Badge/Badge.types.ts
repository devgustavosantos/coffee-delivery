import { COLORS } from '@/styles';
import { Icon, IconWeight } from '@phosphor-icons/react';

type ColorsKeys = keyof typeof COLORS;

enum AvailableBadgeColors {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TERTIARY = 'TERTIARY',
  QUATERNARY = 'QUATERNARY',
}

type UnitedAvailableBadgeColors = keyof typeof AvailableBadgeColors;

type BadgeColors = {
  [K in AvailableBadgeColors]: ColorsKeys;
};

interface BadgeContainerProps {
  color: UnitedAvailableBadgeColors;
}

interface BadgeProps extends BadgeContainerProps {
  icon: Icon;
  weight?: IconWeight;
}

export type {
  BadgeProps,
  BadgeContainerProps,
  BadgeColors,
  UnitedAvailableBadgeColors,
};
