import * as S from './Badge.styles';
import { BadgeProps } from './Badge.types';

export function Badge({ icon: Icon, color }: BadgeProps) {
  return (
    <S.BadgeContainer color={color}>
      <Icon weight="fill" />
    </S.BadgeContainer>
  );
}
