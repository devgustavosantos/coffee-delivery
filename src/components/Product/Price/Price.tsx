import * as S from './Price.styles';
import { PriceProps } from './Price.types';

export function Price({ value, emphasized }: PriceProps) {
  return (
    <S.PriceContainer>
      R$ {emphasized ? <strong>{value}</strong> : <span>{value}</span>}
    </S.PriceContainer>
  );
}
