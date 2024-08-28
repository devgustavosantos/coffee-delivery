import { Badge as BadgeProps } from '@/types/badge';

import * as S from './Badge.styles';

export function Badge({ icon: Icon, color }: BadgeProps) {
  return (
    <S.BadgeContainer color={color}>
      <Icon weight="fill" />
    </S.BadgeContainer>
  );
}
