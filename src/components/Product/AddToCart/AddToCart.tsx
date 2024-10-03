import { useAddToCart } from './AddToCart.hook';
import * as S from './AddToCart.styles';

export function AddToCart() {
  const { handleAddToCart } = useAddToCart();

  return (
    <S.AddToCartContainer onClick={handleAddToCart}>
      <S.ShoppingCartSimpleCustom weight="fill" />
    </S.AddToCartContainer>
  );
}
