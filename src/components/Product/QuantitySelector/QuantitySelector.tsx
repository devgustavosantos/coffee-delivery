import { useProductContext } from '@/contexts';

import * as S from './QuantitySelector.styles';

export function QuantitySelector() {
  const { currentQuantity, handleCurrentQuantity } = useProductContext();

  return (
    <S.QuantitySelectorContainer>
      <S.HandleQuantity onClick={() => handleCurrentQuantity(false)}>
        <S.MinusCustom />
      </S.HandleQuantity>
      <S.CurrentQuantity>{currentQuantity}</S.CurrentQuantity>
      <S.HandleQuantity onClick={() => handleCurrentQuantity(true)}>
        <S.PlusCustom />
      </S.HandleQuantity>
    </S.QuantitySelectorContainer>
  );
}
