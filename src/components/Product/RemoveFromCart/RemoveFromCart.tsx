import * as S from './RemoveFromCart.styles';

export function RemoveFromCart(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <S.RemoveFromCartContainer {...props}>
      <S.TrashCustom />
      <S.RemovalText>Remover</S.RemovalText>
    </S.RemoveFromCartContainer>
  );
}
