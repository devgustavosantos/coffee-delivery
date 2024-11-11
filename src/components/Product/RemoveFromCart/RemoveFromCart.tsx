import { REMOVE_FROM_CART_INFOS } from './RemoveFromCart.infos';
import * as S from './RemoveFromCart.styles';

export function RemoveFromCart(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <S.RemoveFromCartContainer {...props}>
      <S.TrashCustom />
      <S.RemovalText>{REMOVE_FROM_CART_INFOS}</S.RemovalText>
    </S.RemoveFromCartContainer>
  );
}
