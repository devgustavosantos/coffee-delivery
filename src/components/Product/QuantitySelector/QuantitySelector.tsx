import * as S from './QuantitySelector.styles';
import { QuantitySelectorProps } from './QuantitySelector.types';

export function QuantitySelector({
  currentQuantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) {
  return (
    <S.QuantitySelectorContainer>
      <S.HandleQuantity onClick={onDecrement}>
        <S.MinusCustom />
      </S.HandleQuantity>
      <S.CurrentQuantity>{currentQuantity}</S.CurrentQuantity>
      <S.HandleQuantity onClick={onIncrement}>
        <S.PlusCustom />
      </S.HandleQuantity>
    </S.QuantitySelectorContainer>
  );
}
