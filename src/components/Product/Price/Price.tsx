import { usePrice } from './Price.hook';
import * as S from './Price.styles';
import { PriceProps } from './Price.types';

export function Price({ emphasized }: PriceProps) {
  const { valueFormatted } = usePrice();

  return (
    <S.PriceContainer emphasized={emphasized}>
      R$
      <S.ValueContainer emphasized={emphasized}>
        {valueFormatted}
      </S.ValueContainer>
    </S.PriceContainer>
  );
}
