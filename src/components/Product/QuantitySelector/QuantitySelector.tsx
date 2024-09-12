import * as S from './QuantitySelector.styles';

export function QuantitySelector() {
  return (
    <S.QuantitySelectorContainer>
      <S.HandleQuantity>
        <S.MinusCustom />
      </S.HandleQuantity>
      <S.CurrentQuantity>1</S.CurrentQuantity>
      <S.HandleQuantity>
        <S.PlusCustom />
      </S.HandleQuantity>
    </S.QuantitySelectorContainer>
  );
}
