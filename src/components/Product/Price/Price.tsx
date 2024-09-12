import { usePrice } from './Price.hook';
import * as S from './Price.styles';
import { PriceProps } from './Price.types';

export function Price({ value, emphasized }: PriceProps) {
  const { valueFormatted } = usePrice(value);

  return (
    <S.PriceContainer emphasized={emphasized}>
      R$
      {emphasized ? (
        <S.EmphasizedPrice>{valueFormatted}</S.EmphasizedPrice>
      ) : (
        <S.SimplePrice>{valueFormatted}</S.SimplePrice>
      )}
    </S.PriceContainer>
  );
}
