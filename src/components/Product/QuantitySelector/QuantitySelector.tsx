import { useProductContext } from '@/contexts';

import * as S from './QuantitySelector.styles';

export function QuantitySelector() {
  const { currentQuantity, handleCurrentQuantity } = useProductContext();

  return (
    <S.QuantitySelectorContainer>
      <S.HandleQuantity onClick={() => handleCurrentQuantity('decrement')}>
        <S.MinusCustom />
      </S.HandleQuantity>
      <S.CurrentQuantity>{currentQuantity}</S.CurrentQuantity>
      <S.HandleQuantity onClick={() => handleCurrentQuantity('increment')}>
        <S.PlusCustom />
      </S.HandleQuantity>
    </S.QuantitySelectorContainer>
  );
}
