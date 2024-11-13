import * as S from './Badge.styles';
import { BadgeProps } from './Badge.types';

export function Badge({ icon: Icon, color, weight = 'fill' }: BadgeProps) {
  return (
    <S.BadgeContainer color={color}>
      <Icon weight={weight} />
    </S.BadgeContainer>
  );
}
