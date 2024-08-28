import { styled } from 'styled-components';

import { badgeColors } from '@/datas/badge';

import { BadgeContainerProps } from './Badge.types';

export const BadgeContainer = styled.span<BadgeContainerProps>`
  width: 32rem;
  height: 32rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex: 0 0 32rem;
  color: ${({ theme }) => theme.BASE_200};
  background-color: ${({ theme, color }) => theme[badgeColors[color]]};
`;
